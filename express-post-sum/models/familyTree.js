let familyMembers = [
    { id: 1, name: "Ola", age: 50 },
    { id: 2, name: "Kari", age: 45 }
  ];
  
  module.exports = {
    getAllMembers: () => familyMembers,
  
    getMemberById: (id) => familyMembers.find(member => member.id === id),
  
    addMember: (name, age) => {
      const newMember = { id: familyMembers.length + 1, name, age };
      familyMembers.push(newMember);
      return newMember;
    },
  
    updateMember: (id, name, age) => {
      const member = familyMembers.find(member => member.id === id);
      if (!member) return null;
      member.name = name || member.name;
      member.age = age || member.age;
      return member;
    },
  
    deleteMember: (id) => {
      const index = familyMembers.findIndex(member => member.id === id);
      if (index === -1) return false;
      familyMembers.splice(index, 1);
      return true;
    }
  };
  