function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onClick);

    let ratio = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    function onClick(e){
        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;

        let inputDistanceValue = Number(document.getElementById('inputDistance').value);
        let outputDistanceEl = document.getElementById('outputDistance');

        let inputDisInMeters = inputDistanceValue * ratio[fromValue];
        let outputValue = inputDisInMeters / ratio[toValue];
        outputDistanceEl.value = outputValue;
    }
}