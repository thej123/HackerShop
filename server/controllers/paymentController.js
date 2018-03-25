


module.exports={
    validateCard: function(req, res) {

        if ((req.headers.cardnumber.length === 16 && req.headers.cvv.length === 3) || (req.headers.cardnumber.length === 15 && req.headers.cvv.length === 4)){

            let year = new Date().getFullYear() 
            let month = new Date().getMonth() + 1
            let expery = req.headers.expery.split("/")
            //console.log(year, month, expery)


            if(year < parseInt(expery[1]) || (year === parseInt(expery[1]) && month < parseInt(expery[0]))) {
                return res.json({"message":"Card is Valid."})
            }
            else{
                return res.json({"message": "Please Enter valid card details"})
            }
            

        }
        else {
            return res.json({"message": "Please Enter valid card details"})
        }

    }



}