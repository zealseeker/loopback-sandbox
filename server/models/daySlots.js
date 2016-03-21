module.exports = function (DaySlots) {
    DaySlots.createAndUpdateSlot = function updateSlot(cb) {
        var today = new Date();

        DaySlots.create({date: today}, function(err, newDaySlot) {
            newDaySlot.slots.create({start: today}, function(err, newSlot) {
                if(err) console.log("create new slot err>>>", err);
                console.log("create new slot>>>", newSlot);

                newSlot.updateAttribute('end', today, function(err, updatedInstance) {
                    if(err) console.log("err>>>", err);
                    console.log("UpdatedInstance>>>>", updatedInstance);

                    cb(err, newDaySlot);
                });
            });
        });
    };

    DaySlots.remoteMethod(
        'createAndUpdateSlot',
        {
            returns: { arg: 'daySlots', type: 'object', root: true },
            http: { path: '/createAndUpdateSlot', verb: 'post' }
        }
    );
};
