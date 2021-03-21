```yaml
ansible all -b -m yum -a "name=chrony state=present"
ansible all -b -m service -a "name=chronyd state=started enabled=yes"
ansible all -b -a 'chronyc tracking'
```
