from rembg import remove
from PIL import Image

inp = Image.open("r2_logo.png").convert("RGBA")
out = remove(inp)  # returns a PIL image or bytes depending on version
out.save("logo_nobg.png")
