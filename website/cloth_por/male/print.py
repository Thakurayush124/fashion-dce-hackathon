import os

# Get the current directory's parent
parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Get the sibling directory path
sibling_dir = os.path.join(parent_dir, 'female')  # replace 'images' with your sibling directory name

# List all files in the sibling directory
for filename in os.listdir(sibling_dir):
    # Check if the file is an image (you can modify extensions as needed)
    if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
        print(filename)
