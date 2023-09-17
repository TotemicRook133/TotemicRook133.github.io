import subprocess

def ping_devices():
    reachable_devices = []
    for i in range(256):
        ip = f"192.168.0.{i}"
        try:
            subprocess.check_output(["ping", "-n", "1", ip])  # On macOS or Linux, use ["ping", "-c", "1", ip]
            reachable_devices.append(ip)
        except subprocess.CalledProcessError:
            pass

    return reachable_devices

if __name__ == "__main__":
    reachable_devices = ping_devices()
    print("Reachable devices:")
    for device in reachable_devices:
        print(device)
