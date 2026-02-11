function showMessage() {
    alert("สวัสดีจาก JavaScript!");
}

document.getElementById("btn").addEventListener("click", showMessage);

console.log("สคริปทำงานแล้ว");

function runDemo() {
    // ล้าง console หากต้องการ เพื่อไม่ให้เสียแสดับค้มผลการ
    console.clear();
    const output = [];
    
    // ตัวอย่างตัวแปร
    let studentName = 'สมชาย';
    let age = 20;
    let isStudent = true;
    const universityName = 'มหาวิทยาลัยเทคโนโลยี';
    // แสดงค่าตัวแปรบนคอนโซล
    output.push("ชื่อ: " + studentName);
    console.log("ชื่อ:", studentName);
    output.push("อายุ: " + age);
    console.log("อายุ:", age);
    
    // เปลี่ยนค่า let
    age = 21;
    output.push("อายุใหม่: " + age);
    console.log("อายุใหม่:", age);
    // เปลี่ยนค่า const (จะ error แต่กรณีนับ catch)
    try {
        universityName = 'มหาวิทยาลัยใหม่';  // ห้ามให้เกิด TypeError
    } catch (e) {
        output.push("Error: " + e.message);
        console.error(e.message);  // แสดงใน Console เป็นสีแดง
    }
    
    // แสดงผลบนหน้าเว็บ
    document.getElementById("outputBox").textContent = output.join("\n");
}

function runStringDemo() {
    console.clear();
    const output = [];
    
    let text = 'JavaScript เจ๋งมาก';
    let firstName = 'สมชาย';
    
    // Template Literal
    output.push(`สวัสดี ${firstName}!`);
    console.log(`สวัสดี ${firstName}!`);
    
    // String Methods
    output.push("ความยาว: " + text.length);
    console.log("ความยาว:", text.length);
    output.push("ตัวใหญ่: " + text.toUpperCase());
    console.log("ตัวใหญ่:", text.toUpperCase());
    output.push("ตัวเล็ก: " + text.toLowerCase());
    console.log("ตัวเล็ก:", text.toLowerCase());
    output.push('มี "Java"? ' + text.includes('Java'));
    console.log('มี "Java"?', text.includes('Java'));
    output.push('ตำแหน่ง "Script": ' + text.indexOf('Script'));
    console.log('ตำแหน่ง "Script":', text.indexOf('Script'));
    output.push("ตัดคำ (0-4): " + text.slice(0, 4));
    console.log("ตัดคำ (0-4):", text.slice(0, 4));
    output.push("แทนที่: " + text.replace('เจ๋ง', 'สุดยอด'));
    console.log("แทนที่:", text.replace('เจ๋ง', 'สุดยอด'));
    
    // แสดงผลบนหน้าเว็บ
    document.getElementById("output").textContent = output.join("\n");
    
    // แสดงผลใน Console
    console.clear();
    output.forEach(line => console.log("> " + line));
}
