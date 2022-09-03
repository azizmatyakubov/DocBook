
// start: YYYY-MM-DD-HH:mm; end: YYYY-MM-DD-HH:mm; duration: HH:mm
export const createSlots = (startTime, endTime, duration) => {
    const slots = [];
    const start = moment(startTime, "YYYY-MM-DD-HH:mm");
    const end = moment(endTime, "YYYY-MM-DD-HH:mm");
    const duration = moment.duration(duration);
    let current = start;
    while (current <= end) {
        slots.push(current.format("YYYY-MM-DD-HH:mm"));
        current = current.add(duration);
    }
    return slots;
}