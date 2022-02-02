var m = new moment("27/01/2022 08:00", "DD/MM/YYYY HH:mm", false);
//console.log(m);
//console.log(m.format('HH:mm'));
//m.hour(14).minute(53);
//console.log(m);
//console.log(m.format('HH:mm'));
var m2 = new moment(m.format('DD/MM/YYYY') + " " + "14:53","DD/MM/YYYY HH:mm", false);
console.log(m.format('DD/MM/YYYY'));
console.log(m2);
const picker = new tempusDominus.TempusDominus(
  document.getElementById('datetimepicker1'),
  {
    localization: {
      locale: 'en-gb'
    },
    display: {
        viewMode: 'calendar',
        components: {
            decades: false,
            year: false,
            month: false,
            date: false,
            hours: true,
            minutes: true,
            seconds: false,
            useTwentyfourHour: false
        }
    },
    allowInputToggle: false,
    hooks: {
      inputFormat: (context, date) => {
        console.log('date :', date);
        return moment(date).format('HH:mm')
      },
      inputParse: (context, value) => {
          console.log("value: " + value);
          var dtstr = value;
          if(value.length === 5) {
            const currentDt = new moment("27/01/2022 08:00", "DD/MM/YYYY HH:mm", false);
            const newDt = new moment(m.format('DD/MM/YYYY') + " " + value,"DD/MM/YYYY HH:mm", false);
            dtstr = newDt
          }
          console.log(dtstr);
          
          return new tempusDominus.DateTime(dtstr);
          
      }
    },
    defaultDate: new tempusDominus.DateTime("2022-01-28T23:20:59.684Z")
  }
);
document.querySelector("input[name='time']").value = "23:20";
//document.querySelector("input[name='time']").value = moment("2022-01-28T23:20:59.684Z").format('HH:mm');
const subscription = picker.subscribe(tempusDominus.Namespace.events.change, (e) => {
  console.log(e);
});
const showsubscription = picker.subscribe(tempusDominus.Namespace.events.show, (e) => {
  console.log(e);
  console.log("viewDate: " + picker.viewDate);
  console.log("picked: " + picker.dates.picked);
  console.log("lastPicked: " + picker.dates.lastPicked);
  console.log("lastPickedIndex: " + picker.dates.lastPickedIndex);
  //picker.dates.add(new tempusDominus.DateTime());
});
const hidesubscription = picker.subscribe(tempusDominus.Namespace.events.hide, (e) => {
  console.log(e);
});
const updatesubscription = picker.subscribe(tempusDominus.Namespace.events.update, (e) => {
  console.log(e);
});
//document.querySelector("input[name='time']").addEventListener("keydown", (event) => {
//	event.preventDefault();
//});