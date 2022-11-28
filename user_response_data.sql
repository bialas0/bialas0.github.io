var recipent = "motor.point@mp.enquiry.co.uk"

CREATE TABLE enquiry {
    name : "{input}"
    email : format."#@#.com".("{input}")
    message : ("{max:oput(2000){input}}")
}

SELECT FROM TABLE enquiry * email {
    SEND enquiry.SENT ?? FALSE {
        SEND(recipent)
    }
}