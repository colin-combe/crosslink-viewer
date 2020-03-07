EXT=json
for i in $(ls);do
    if [ "${i}" != "${i%.${EXT}}" ];then
       cat $i | python -m json.tool > "TEMP$i";
       mv "TEMP$i" $i;
    fi
done
