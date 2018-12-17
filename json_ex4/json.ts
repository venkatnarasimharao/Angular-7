var data:any={ "records":
[ 
    {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, 
    {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, 
    {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, 
    {"Name":"Around the Horn","City":"London","Country":"UK"}, 
    {"Name":"B's Beverages","City":"London","Country":"UK"}, 
    {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, 
    {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, 
    {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, 
    {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, 
    {"Name":"Bon app'","City":"Marseille","Country":"France"}, 
    {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}
 ] 
};
for(var i:number=0;i<data.records.length;i++){
    var obj:any=data.records[i];
    document.write(obj.Name+"---"+obj.City+"---"+obj.Country+"<br>");
};