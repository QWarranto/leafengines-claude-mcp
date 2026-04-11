#!/usr/bin/env python3
"""
Unified Download Tracker for LeafEngines Distribution Channels
Tracks: npm (MCP Server), Clawhub, Claude Skills, GitHub
"""

import json
import requests
import time
from datetime import datetime, timedelta
import sqlite3
from pathlib import Path

class DownloadTracker:
    def __init__(self, db_path="downloads.db"):
        self.db_path = db_path
        self.init_db()
        
    def init_db(self):
        """Initialize SQLite database for tracking"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Create tables
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS download_stats (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                platform TEXT NOT NULL,
                package TEXT NOT NULL,
                downloads INTEGER,
                stars INTEGER,
                forks INTEGER,
                watchers INTEGER,
                versions INTEGER,
                unique_visitors INTEGER,
                data_json TEXT
            )
        ''')
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS daily_trends (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date DATE NOT NULL,
                platform TEXT NOT NULL,
                package TEXT NOT NULL,
                daily_downloads INTEGER,
                total_downloads INTEGER,
                UNIQUE(date, platform, package)
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def fetch_npm_stats(self, package="@ancientwhispers54/leafengines-mcp-server"):
        """Fetch npm download statistics"""
        try:
            # Last week
            url = f"https://api.npmjs.org/downloads/point/last-week/{package}"
            response = requests.get(url, timeout=10)
            weekly = response.json()
            
            # Last day
            url = f"https://api.npmjs.org/downloads/point/last-day/{package}"
            response = requests.get(url, timeout=10)
            daily = response.json()
            
            # Range (last 30 days)
            end_date = datetime.now().strftime("%Y-%m-%d")
            start_date = (datetime.now() - timedelta(days=30)).strftime("%Y-%m-%d")
            url = f"https://api.npmjs.org/downloads/range/{start_date}:{end_date}/{package}"
            response = requests.get(url, timeout=10)
            range_data = response.json()
            
            return {
                "package": package,
                "daily": daily.get("downloads", 0),
                "weekly": weekly.get("downloads", 0),
                "range": range_data.get("downloads", []),
                "last_updated": datetime.now().isoformat()
            }
        except Exception as e:
            print(f"Error fetching npm stats: {e}")
            return None
    
    def fetch_clawhub_stats(self, skill="leafengines"):
        """Fetch Clawhub statistics"""
        try:
            url = f"https://clawhub.ai/api/v1/skills/{skill}"
            response = requests.get(url, timeout=10)
            data = response.json()
            
            stats = data.get("skill", {}).get("stats", {})
            return {
                "skill": skill,
                "downloads": stats.get("downloads", 0),
                "stars": stats.get("stars", 0),
                "versions": stats.get("versions", 0),
                "installs_all_time": stats.get("installsAllTime", 0),
                "installs_current": stats.get("installsCurrent", 0),
                "comments": stats.get("comments", 0),
                "created_at": data.get("skill", {}).get("createdAt"),
                "updated_at": data.get("skill", {}).get("updatedAt"),
                "last_updated": datetime.now().isoformat()
            }
        except Exception as e:
            print(f"Error fetching Clawhub stats: {e}")
            return None
    
    def fetch_github_stats(self, repo="QWarranto/leafengines-claude-mcp"):
        """Fetch GitHub repository statistics"""
        try:
            url = f"https://api.github.com/repos/{repo}"
            headers = {"Accept": "application/vnd.github.v3+json"}
            response = requests.get(url, headers=headers, timeout=10)
            data = response.json()
            
            return {
                "repository": repo,
                "stars": data.get("stargazers_count", 0),
                "forks": data.get("forks_count", 0),
                "watchers": data.get("watchers_count", 0),
                "open_issues": data.get("open_issues_count", 0),
                "size": data.get("size", 0),
                "created_at": data.get("created_at"),
                "updated_at": data.get("updated_at"),
                "pushed_at": data.get("pushed_at"),
                "last_updated": datetime.now().isoformat()
            }
        except Exception as e:
            print(f"Error fetching GitHub stats: {e}")
            return None
    
    def save_stats(self, platform, package, stats):
        """Save statistics to database"""
        if not stats:
            return
        
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Extract common metrics
        downloads = stats.get("downloads") or stats.get("weekly") or 0
        stars = stats.get("stars", 0)
        forks = stats.get("forks", 0)
        watchers = stats.get("watchers", 0)
        versions = stats.get("versions", 1)
        
        cursor.execute('''
            INSERT INTO download_stats 
            (platform, package, downloads, stars, forks, watchers, versions, data_json)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (platform, package, downloads, stars, forks, watchers, versions, json.dumps(stats)))
        
        # Also update daily trends
        today = datetime.now().date().isoformat()
        cursor.execute('''
            INSERT OR REPLACE INTO daily_trends 
            (date, platform, package, daily_downloads, total_downloads)
            VALUES (?, ?, ?, ?, ?)
        ''', (today, platform, package, downloads, downloads))  # Simplified - would need historical tracking
        
        conn.commit()
        conn.close()
    
    def generate_report(self):
        """Generate a comprehensive download report"""
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Get latest stats for each platform
        cursor.execute('''
            SELECT platform, package, downloads, stars, forks, watchers, timestamp
            FROM download_stats 
            WHERE id IN (
                SELECT MAX(id) 
                FROM download_stats 
                GROUP BY platform, package
            )
            ORDER BY platform, package
        ''')
        
        rows = cursor.fetchall()
        
        report = {
            "generated_at": datetime.now().isoformat(),
            "platforms": {},
            "summary": {
                "total_downloads": 0,
                "total_stars": 0,
                "total_forks": 0,
                "platform_count": 0
            }
        }
        
        for row in rows:
            platform, package, downloads, stars, forks, watchers, timestamp = row
            
            if platform not in report["platforms"]:
                report["platforms"][platform] = []
            
            report["platforms"][platform].append({
                "package": package,
                "downloads": downloads,
                "stars": stars,
                "forks": forks,
                "watchers": watchers,
                "last_updated": timestamp
            })
            
            report["summary"]["total_downloads"] += (downloads or 0)
            report["summary"]["total_stars"] += (stars or 0)
            report["summary"]["total_forks"] += (forks or 0)
        
        report["summary"]["platform_count"] = len(report["platforms"])
        
        conn.close()
        return report
    
    def run_tracking(self):
        """Run complete tracking for all platforms"""
        print("Starting download tracking...")
        
        # Track ALL npm packages
        npm_packages = [
            "@ancientwhispers54/leafengines-mcp-server",
            "n8n-nodes-leafengines", 
            "node-red-contrib-leafengines"
        ]
        
        total_npm_downloads = 0
        for package in npm_packages:
            print(f"Fetching npm stats for {package}...")
            npm_stats = self.fetch_npm_stats(package)
            if npm_stats:
                self.save_stats("npm", package, npm_stats)
                weekly = npm_stats.get('weekly', 0)
                total_npm_downloads += weekly
                print(f"  Weekly downloads: {weekly}")
        
        print(f"Total npm downloads: {total_npm_downloads}")
        
        # Track Clawhub
        print("Fetching Clawhub stats...")
        clawhub_stats = self.fetch_clawhub_stats()
        if clawhub_stats:
            self.save_stats("clawhub", "leafengines", clawhub_stats)
            print(f"  Downloads: {clawhub_stats.get('downloads', 0)}")
        
        # Track GitHub
        print("Fetching GitHub stats...")
        github_stats = self.fetch_github_stats()
        if github_stats:
            self.save_stats("github", "leafengines-claude-mcp", github_stats)
            print(f"  Stars: {github_stats.get('stars', 0)}")
        
        # Generate report
        report = self.generate_report()
        
        # Save report to file
        with open("download_report.json", "w") as f:
            json.dump(report, f, indent=2)
        
        print(f"\nReport saved to download_report.json")
        print(f"Total tracked downloads: {report['summary']['total_downloads']}")
        
        return report

def main():
    """Main function"""
    tracker = DownloadTracker()
    
    # Run tracking
    report = tracker.run_tracking()
    
    # Print summary
    print("\n" + "="*60)
    print("DOWNLOAD TRACKING SUMMARY")
    print("="*60)
    
    for platform, packages in report["platforms"].items():
        print(f"\n{platform.upper()}:")
        for pkg in packages:
            print(f"  {pkg['package']}:")
            if pkg.get('downloads'):
                print(f"    Downloads: {pkg['downloads']}")
            if pkg.get('stars'):
                print(f"    Stars: {pkg['stars']}")
            if pkg.get('forks'):
                print(f"    Forks: {pkg['forks']}")
    
    print("\n" + "="*60)
    print(f"TOTAL DOWNLOADS: {report['summary']['total_downloads']}")
    print(f"TOTAL STARS: {report['summary']['total_stars']}")
    print(f"PLATFORMS TRACKED: {report['summary']['platform_count']}")
    print("="*60)

if __name__ == "__main__":
    main()