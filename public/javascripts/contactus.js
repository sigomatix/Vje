$(function() {
    var Model = function() {
        var self = this;
        this.message = ko.observable("");
        this.messageSent = ko.observable(false);

        this.senderEmail = ko.observable("").extend({ required: {message:"Ce champ est obligatoire."}, email: { message: 'Veuillez saisir une adresse email valide.'} });

        this.submit = function() {
            ko.validation.validateObservable(self.senderEmail);
            if(!self.senderEmail.isValid()) return;
            $.post("/contactus", {
                senderEmail: self.senderEmail(),
                message: self.message()
            });
            self.messageSent(true);
            $("#messageSentNotification").fadeIn();
            return false;
        }
    }
    ko.applyBindings(new Model(), $("#sendMessageForm")[0]);
});