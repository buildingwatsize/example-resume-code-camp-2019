function makeFormDataEmail() {
    // <a class="primary_btn" href="mailto:chinnawat.cpre@gmail.com?subject=Hiring from CodeCamp2019 Resume Webpage"><span>Hire Me</span></a>
    let name = $("#name").val()
    let email = $("#email").val()
    let subject = $("#subject").val()
    let message = $("#message").val()
    let target = "chinnawat.cpre@gmail.com"

    if (name && email && subject && message) {
        let form = 'mailto:' + target + "?cc=" + email + "&subject=" + subject + "&body=Sent From " + name + " (" + email + ") %0D%0A%0D%0A " + message
        document.location.href = form
    } else {
        alert("กรุณากรอกรายละเอียดให้ครบถ้วน")
    }
}