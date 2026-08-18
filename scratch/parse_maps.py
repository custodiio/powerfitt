import re
import json

with open("scratch/maps.html", "r", encoding="utf-8") as f:
    text = f.read()

print("Length of maps.html:", len(text))

# Search for google photo URLs
# Patterns: https://lh5.googleusercontent.com/p/... or =w...-h... or /p/
photo_matches = re.findall(r'https:\/\/[a-z0-9\.\-_]*googleusercontent\.com\/p\/[a-zA-Z0-9_\-]+', text)
print("Unique /p/ photo URLs found:", len(set(photo_matches)))
for p in list(set(photo_matches))[:10]:
    print("Found photo:", p)

# Search for any lh3/lh5/ggpht urls
lh_matches = re.findall(r'https:\/\/(?:lh[0-9]|ggpht)\.googleusercontent\.com\/[^\s\"\'\<\>]+', text)
print("Total LH matches:", len(lh_matches))
for m in list(set(lh_matches))[:10]:
    print("LH match:", m[:120])

# Search for reviews or text
print("Searching for review comments...")
reviews = re.findall(r'\"([^\"]{20,200})\"', text)
gym_reviews = [r for r in reviews if any(k in r.lower() for k in ['academia', 'aparelho', 'treino', 'atendimento', 'ótima', 'excelente', 'top', 'limp', 'professor', 'instrutor', 'dom miguel'])]
print(f"Found {len(gym_reviews)} candidate review snippets:")
for gr in gym_reviews[:10]:
    print("-", gr)
