
const getUser = async () => {
     const method = "POST";
          const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          };
          const res = await fetch("index/test", {method, headers});
          if (res.ok) {
            const responseData = await res.json();
            // const parsMessage = JSON.parse(responseMessage)
            console.log(responseData);
            console.log(responseData[0]);
            return responseData;

          } else {
            console.log('failed');
          }
}

export default {
    getUser
}