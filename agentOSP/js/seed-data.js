function seedDemoData() {
  const demoRequests = [
    {id:"OSP101",name:"Ramesh Behera",mobile:"9876543210",village:"Balianta",service:"Scholarship",status:"Assigned",agent:"agent1"},
    {id:"OSP102",name:"Sita Nayak",mobile:"9123456780",village:"Jatni",service:"Document Apply",status:"New",agent:""},
    {id:"OSP103",name:"Manoj Sahoo",mobile:"9988776655",village:"Balipatna",service:"Farmer Scheme",status:"Assigned",agent:"agent1"},
    {id:"OSP104",name:"Laxmi Pradhan",mobile:"9012345678",village:"Khordha",service:"PM-KISAN",status:"Completed",agent:"agent1"},
    {id:"OSP105",name:"Bikash Rout",mobile:"8899776655",village:"Begunia",service:"Job Assistance",status:"New",agent:""},
    {id:"OSP106",name:"Anita Das",mobile:"9345678901",village:"Banapur",service:"Scholarship",status:"Assigned",agent:"agent1"},
    {id:"OSP107",name:"Kailash Mohanty",mobile:"9871203456",village:"Bolagarh",service:"CSC Service",status:"Completed",agent:"agent1"},
    {id:"OSP108",name:"Sunita Jena",mobile:"9011122233",village:"Tangi",service:"Document Apply",status:"New",agent:""},
    {id:"OSP109",name:"Prakash Barik",mobile:"9887766554",village:"Chilika",service:"Farmer Subsidy",status:"Assigned",agent:"agent1"},
    {id:"OSP110",name:"Meena Sethi",mobile:"9776655443",village:"Nirakarpur",service:"Scholarship",status:"Completed",agent:"agent1"},

    {id:"OSP111",name:"Sanjay Panda",mobile:"9090909090",village:"Bhubaneswar",service:"Document Apply",status:"New",agent:""},
    {id:"OSP112",name:"Rekha Patra",mobile:"9191919191",village:"Pipili",service:"Job Assistance",status:"Assigned",agent:"agent1"},
    {id:"OSP113",name:"Narayan Samal",mobile:"9292929292",village:"Delang",service:"CSC Service",status:"Completed",agent:"agent1"},
    {id:"OSP114",name:"Kalpana Rout",mobile:"9393939393",village:"Satyabadi",service:"Scholarship",status:"New",agent:""},
    {id:"OSP115",name:"Ajay Behera",mobile:"9494949494",village:"Kanas",service:"Farmer Scheme",status:"Assigned",agent:"agent1"},
    {id:"OSP116",name:"Sasmita Mishra",mobile:"9595959595",village:"Gop",service:"Document Apply",status:"Completed",agent:"agent1"},
    {id:"OSP117",name:"Ranjit Das",mobile:"9696969696",village:"Astaranga",service:"PMFBY",status:"Assigned",agent:"agent1"},
    {id:"OSP118",name:"Puja Mohapatra",mobile:"9797979797",village:"Sakhigopal",service:"Scholarship",status:"New",agent:""},
    {id:"OSP119",name:"Dipak Jena",mobile:"9898989898",village:"Konark",service:"CSC Service",status:"Assigned",agent:"agent1"},
    {id:"OSP120",name:"Mamata Swain",mobile:"9999999999",village:"Puri",service:"Document Apply",status:"Completed",agent:"agent1"}
  ];

  localStorage.setItem("requests", JSON.stringify(demoRequests));
  alert("✅ Demo data (20 records) added successfully!");
}
