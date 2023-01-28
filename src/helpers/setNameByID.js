export const showNameByID = (contactID, myContacts, tempContactName) => {
    const result = myContacts.filter(contact => contact.id === +contactID);
    if(result.length !== 0) {
        const nameByID = (result[0].contactInfo.surname + ' ' + result[0].contactInfo.name).toString().replace(/"/g, "");
        return nameByID;
    } else if (result.length === 0 && tempContactName) {
        return tempContactName;
    } else {
        return 'Неизвестный';
    }
};