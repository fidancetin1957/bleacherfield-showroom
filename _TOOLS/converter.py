import os
from PIL import Image

def convert_to_webp(source_folder, quality=85):
    """
    Converts all JPG and PNG files in a folder to WebP format.
    Optimized for BleacherField Boutique Showroom.
    """
    print(f"System Starting: Optimizing images in '{source_folder}' to WebP format...")
    
    # Scan folder
    count = 0
    for filename in os.listdir(source_folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            file_path = os.path.join(source_folder, filename)
            
            # New filename (.webp)
            base_name = os.path.splitext(filename)[0]
            target_path = os.path.join(source_folder, f"{base_name}.webp")
            
            try:
                # Open and convert
                with Image.open(file_path) as img:
                    if img.mode != 'RGBA' and img.format == 'PNG':
                        img = img.convert('RGBA')
                    elif img.format != 'PNG':
                        img = img.convert('RGB')
                        
                    # Save as WebP
                    img.save(target_path, 'webp', quality=quality)
                    size_kb = os.path.getsize(target_path) / 1024
                    print(f"[SUCCESS] Converted: {filename} -> {base_name}.webp ({size_kb:.1f} KB)")
                    count += 1
            except Exception as e:
                print(f"[ERROR] Could not convert {filename}. Reason: {e}")

    print(f"Process Complete. {count} files sealed.")

if __name__ == "__main__":
    # BleacherField - public/images/ directory
    IMAGE_DIR = os.path.join("..", "public", "images")
    if not os.path.exists(IMAGE_DIR):
        # Alternative if run from root
        IMAGE_DIR = os.path.join("public", "images")
        
    convert_to_webp(IMAGE_DIR)
