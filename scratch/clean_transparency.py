import os
from PIL import Image, ImageDraw

def make_circle_crop_transparent(src_path, dst_path):
    img = Image.open(src_path).convert("RGBA")
    w, h = img.size
    
    # Create circular mask
    mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((4, 4, w - 5, h - 5), fill=255)
    
    # Apply mask
    img.putalpha(mask)
    img.save(dst_path, "PNG")
    print(f"Perfect circular transparency applied to {dst_path}")

make_circle_crop_transparent("public/real_images/icone.png", "public/images/icone.png")
make_circle_crop_transparent("public/real_images/icone.png", "public/favicon.png")
make_circle_crop_transparent("public/real_images/logo.png", "public/images/logo.png")
