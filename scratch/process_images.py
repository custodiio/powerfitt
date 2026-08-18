import os
from PIL import Image

os.makedirs("public/images", exist_ok=True)

# 1. Process icone.png (remove black/dark background if any, or keep clean RGBA)
icone_src = "public/real_images/icone.png"
if os.path.exists(icone_src):
    img = Image.open(icone_src).convert("RGBA")
    datas = img.getdata()
    
    # Check corners to see if background is black
    corner = datas[0]
    print("Icone corner pixel:", corner)
    
    new_data = []
    # If the background is solid black or very dark, make it transparent
    for item in datas:
        # Check if near black (r<30, g<30, b<30) and we want transparency
        if item[0] < 25 and item[1] < 25 and item[2] < 25:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save("public/images/icone.png", "PNG")
    # Also save as favicon
    fav = img.resize((64, 64), Image.Resampling.LANCZOS)
    fav.save("public/favicon.png", "PNG")
    print("Saved public/images/icone.png and public/favicon.png")

# 2. Process logo.png
logo_src = "public/real_images/logo.png"
if os.path.exists(logo_src):
    l_img = Image.open(logo_src).convert("RGBA")
    l_datas = l_img.getdata()
    print("Logo corner pixel:", l_datas[0])
    
    # If corner is black, make black background transparent
    new_l_data = []
    for item in l_datas:
        if item[0] < 25 and item[1] < 25 and item[2] < 25:
            new_l_data.append((255, 255, 255, 0))
        else:
            new_l_data.append(item)
    l_img.putdata(new_l_data)
    l_img.save("public/images/logo.png", "PNG")
    print("Saved public/images/logo.png")

# 3. Copy facade and gym photos
for name in ["fachada.png", "boa2.png"]:
    src = os.path.join("public/real_images", name)
    if os.path.exists(src):
        im = Image.open(src)
        im.save(os.path.join("public/images", name))
        print(f"Copied {name} to public/images/{name}")
