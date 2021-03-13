import mongoose from 'mongoose';

const workOrderSchema = mongoose.Schema({
    title: String,
    issuer: String,
    issuedTo: String,
    summary: String,
    comments: String,
    selectedFile: String,
    issueDate: {
        type: Date,
        default: new Date()
    },
    status: String
    // currentStatus: {
    //     type: Boolean,
    //     default: new Boolean()
    // },
    // assignStatus: {
    //     type: Boolean,
    //     default: new Boolean()
    // },
    // completeStatus: {
    //     type: Boolean,
    //     default: new Boolean()
    // },
    // archivedStatus: {
    //     type: Boolean,
    //     default: new Boolean()
    // }

});

const WorkOrderMessage = mongoose.model('WorkOrderMessage', workOrderSchema);

export default WorkOrderMessage;