export function realtimeFetchFromFirebase(collection_name){
        const c = collection(db, collection_name);
        const list = [];
        onSnapshot(c, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var id = doc.id;
                list.push({...doc.data(), id })
                return list;
            })
            
        })
              
}
       