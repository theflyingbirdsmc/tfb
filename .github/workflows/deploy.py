import os
import paramiko
ssh_client = paramiko.SSHClient()
ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

file_path = os.environ['FILE_PATHS'].split(" ")
print(str(file_path))

SFTP_TFB_PASSWORD = os.environ['SFTP_TFB_PASSWORD']
SFTP_TFB_LOBBY_USERNAME = os.environ['SFTP_TFB_LOBBY_USERNAME']
SFTP_TFB_FLAMECORD_USERNAME = os.environ['SFTP_TFB_FLAMECORD_USERNAME']
SFTP_TFB_TEST_USERNAME = os.environ['SFTP_TFB_TEST_USERNAME']

server_sftpusernames = {
    "TFB-Lobby": SFTP_TFB_LOBBY_USERNAME,
    "TFB-Flamecord": SFTP_TFB_FLAMECORD_USERNAME,
    "TFB-TEST": SFTP_TFB_TEST_USERNAME
}
for file in file_path:
    for server, username in server_sftpusernames.items():
        if server in file:
            remotePath = file.Substring(file.IndexOf('/') + 1);
            print("I'm + " + server_sftpusernames[server] + "for the server " + server)
            ssh_client.connect(hostname='germany01.theflyingbirds.net', username=server_sftpusernames[server], password=SFTP_TFB_PASSWORD, port=2022)
            s = ssh_client.open_sftp()
            s.put(file, remotePath)