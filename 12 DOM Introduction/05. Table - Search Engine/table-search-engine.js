function solve() {
   //TODO
   const students=document.querySelectorAll('table tbody tr');
   const searchStr=document.querySelector('#searchField').value.toLowerCase().trim();

   if (searchStr=='') {
      return;
   }

   students.forEach(student=>{

      student.classList.remove("select");
      if (student.textContent.toLowerCase().includes(searchStr)) {
      student.classList.add("select");
   }
   });
   
}