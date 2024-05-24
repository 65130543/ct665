# ct665
link หน้าเว็บ
http://4.145.24.108
ลิ้ง docker image
https://hub.docker.com/r/krukarn543/ct665/tags
ขั้นตอนการ Deploy
1.เตรียมไฟล์ใน github นี้
##docker
1.docker login
2.run docker build -t krukarn543/ct665 .
3.run docker push krukarn543/ct665
##run terminal Power Shell
1 -> az login
2 -> az group create --name myResourceGroup --location southeastasia
3 -> az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --generate-ssh-keys

เข้า azure k8s cluster -> Apply yaml
รอจนเสร็จ
