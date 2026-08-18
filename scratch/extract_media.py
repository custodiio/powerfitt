import urllib.request
import re
import json
import os

os.makedirs("public/real_images", exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7'
}

# 1. Scrape Maps
maps_url = 'https://www.google.com/maps/place/PowerFitt/@-17.7587224,-50.9158331,17.29z/data=!4m6!3m5!1s0x9361c5c54e01c923:0xa9dc7ad527d0c9a3!8m2!3d-17.7574803!4d-50.9171156!16s%2Fg%2F11sjyj48jg'
req = urllib.request.Request(maps_url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        with open("scratch/maps.html", "w", encoding="utf-8") as f:
            f.write(content)
        print("Saved maps.html, length:", len(content))
        
        # Look for photos
        photos = re.findall(r'https:\/\/[a-zA-Z0-9\-\.]*googleusercontent\.com\/p\/[a-zA-Z0-9_\-]+', content)
        print("Found /p/ photos:", len(photos))
        unique_photos = list(set(photos))
        for idx, p in enumerate(unique_photos):
            print(f"Photo {idx}: {p}")
            # Try downloading high res
            img_url = f"{p}=s1600-k-no"
            try:
                img_req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(img_req) as img_resp:
                    img_data = img_resp.read()
                    with open(f"public/real_images/maps_photo_{idx+1}.jpg", "wb") as out_f:
                        out_f.write(img_data)
                    print(f"Downloaded real photo {idx+1} ({len(img_data)} bytes)")
            except Exception as err:
                print(f"Failed to download {p}: {err}")
except Exception as e:
    print("Maps Error:", e)

# 2. Check Instagram Reel
reel_url = 'https://www.instagram.com/reel/DLKWOSZuwEx/'
print("Checking Instagram reel...")
try:
    req2 = urllib.request.Request(reel_url, headers=headers)
    with urllib.request.urlopen(req2) as resp:
        content2 = resp.read().decode('utf-8', errors='ignore')
        with open("scratch/reel.html", "w", encoding="utf-8") as f:
            f.write(content2)
        print("Saved reel.html, length:", len(content2))
        video_urls = re.findall(r'https:\/\/[^\s\"\'\<\>]+mp4[^\s\"\'\<\>]*', content2)
        print("Found mp4 candidates:", len(video_urls))
        for v in set(video_urls):
            print("Video candidate:", v[:100])
except Exception as e:
    print("Reel Error:", e)
