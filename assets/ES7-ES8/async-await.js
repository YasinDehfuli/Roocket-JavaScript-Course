const fetchData = async(url) => {
  let data = { name : 'hesam' , family : 'mousavi'};
  if(true) {
    return data;
  } else {
    throw new Error('error URL');
  }
}

const saveDataToDB = async(data) => {
  if(true) {
    return true;
  } else {
    throw new Error('error DB')
  }
}

// fetchData('roocket.ir')
//     .then((data) => saveDataToDB(data))
//     .then((status) => console.log(status))
//     .catch((err) => console.log(err));


let executeFetchData = async() => {
  try {
    let data = await fetchData('roocket.ir');
    let statusDB =  await saveDataToDB(data);
    console.log(statusDB);
  } catch(err) {
    console.log(err);
  }
}

executeFetchData();