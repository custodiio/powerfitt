import os
import re
import urllib.request

with open('scratch/reel.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Find all scontent / cdninstagram / fbcdn urls
matches = re.findall(r'(https:[\\\/]+[a-zA-Z0-9\.\-_]+(?:cdninstagram|fbcdn)[a-zA-Z0-9\.\-_\/\\?=&;%]+)', text)
print(f"Found {len(matches)} matches")

urls = []
for m in matches:
    clean = m.replace('\\/', '/').replace('&amp;', '&')
    clean = re.sub(r'\\u0026', '&', clean)
    urls.append(clean)

os.makedirs('public/real_media', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Referer': 'https://www.instagram.com/'
}

# Download unique images
img_count = 0
for idx, u in enumerate(set(urls)):
    if 'mp4' in u:
        print("Found video URL:", u[:120])
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req) as resp:
                data = resp.read()
                if len(data) > 10000:
                    with open('public/real_media/powerfitt_reel.mp4', 'wb') as vf:
                        vf.write(data)
                    print(f"DOWNLOADED REAL REEL MP4! Size: {len(data)} bytes")
        except Exception as e:
            print("Failed video download:", e)
    elif 'jpg' in u or 'jpeg' in u or 'webp' in u or 'scontent' in u:
        if img_count < 15:
            try:
                req = urllib.request.Request(u, headers=headers)
                with urllib.request.urlopen(req) as resp:
                    data = resp.read()
                    if len(data) > 10000:
                        img_count += 1
                        ext = 'jpg' if 'webp' not in u else 'webp'
                        with open(f'public/real_media/insta_media_{img_count}.{ext}', 'wb') as img_f:
                            img_f.write(data)
                        print(f"Downloaded real insta media {img_count}: {len(data)} bytes")
            except Exception as e:
                pass
