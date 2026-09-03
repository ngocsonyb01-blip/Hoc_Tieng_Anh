import os

for fname in ['test1.mp3', 'test2.mp3', 'test3.mp3']:
    p = os.path.join('public/audio/listening', fname)
    size_mb = os.path.getsize(p) / (1024 * 1024)
    print(f"{fname}: {size_mb:.2f} MB")
