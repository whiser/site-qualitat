
$("#form-v-alert").hide();
$("#go-home-btn").hide();
$("#redirect-docusign-alert").hide();

$(document).ready(function(){

    $("#check-form").submit(function (e){
        e.preventDefault();

        $("#send-btn").hide(500);
        $("#form-v-alert").show(1000);
        $("#go-home-btn").hide();
        $("#redirect-docusign-alert").hide();

        //get input values
        const clientMail = $(this).find('input[id="email"]').val();
        const enterprise = $(this).find('input[id="enterprise"]').val();
        const managerName = $(this).find('input[id="managerName"]').val();
        const siegeSocial = $(this).find('input[id="siege"]').val();
        const address = $(this).find('input[id="address"]').val();

        setTimeout(function (){
            $("#send-btn").hide();
            $("#form-v-alert").hide(500);
            $("#go-home-btn").hide();
            $("#redirect-docusign-alert").show(1000);

            //redirect function
            const date  = new Date();
            const dateFormat  = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear() +
                " à " + date.getHours() + ":" + date.getMinutes();
            const docusignPowerFormLink = "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=24f23744-ee54-4a36-8592-a3096e4f0087&env=demo&acct=b1a1b1f6-3c8e-475c-93f6-6aa787865083&v=2"
            const linkParams = "signer_UserName=" + managerName+
                "&signer_Email=" + clientMail+
                "&enterpriseName=" + enterprise+
                "&headOffice=" + siegeSocial+
                "&currentResidence=" + address+
                "&currentDateSigned=" + dateFormat+
                "&signer_acknowledgement=Read and accepted.";
            const finalLink = docusignPowerFormLink+"&"+linkParams;
            window.open(finalLink, '_blank');
            $('#check-form').trigger("reset");
            setTimeout(function (){
                $("#send-btn").show(1000);
                $("#form-v-alert").hide();
                $("#go-home-btn").show(500);
                $("#redirect-docusign-alert").hide(500);
            }, 3000)

        }, 2000)


    })

});