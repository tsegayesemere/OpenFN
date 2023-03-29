fn(state => {
  const { pdata } = state;
  console.log(pdata);
  const copied_data=pdata.map(patient => {
    const Splitted_name=patient.name.split(' ');
    const First_name=Splitted_name[0];
    const Filtered_tele=patient.phone.replace(/\D/g,'');
    const Final_tele=new RegExp('.{7}$').exec(Filtered_tele);    
  const Final_pacient_list =  {
    trackedEntityType: "nEenWmSyUEp",
    orgUnit: 'g8upMTyEZGZ',
    attributes: [
      {
      attribute: 'cejWyOfXge',
      value: 'Male',
      },
  //    {
  //    attribute: 'lZGmxYbs97q',
  //    value: Final_tele,   
  //    },
      {
        attribute: 'w75KJ2mc4zz',
        value: First_name,   
      },
      {
        attribute: 'zDhUuAYrxNC',
        value: Splitted_name[1],   
      },      
    ],    
  };
 
  return Final_pacient_list;
});
  return {...state, copied_data};
});
each(
  "copied_data[*]",
  create('trackedEntityInstances', {
    orgUnit: 'g8upMTyEZGZ',
    trackedEntityType: 'nEenWmSyUEp',
    attributes: dataValue ("attributes"),
  })
);