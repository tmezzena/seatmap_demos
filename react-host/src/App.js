import React from 'react';
import ReservedSeatMapWrapper from 'reservedseat/ReservedSeatMapWrapper';

const App = () => {
  const totalTickets = 2;
  const mountEl = React.useRef(null);
  const [seatStatus, setSeatStatus] = React.useState([]);
  const [seatKinds, setseatKinds] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [allChosen, setAllChosen] = React.useState(false);

  const seatSelectChanged = (infos) => {
    console.log('seatSelectChanged', infos);
    setAllChosen(infos.chosen == totalTickets);
  };
  const seatMapLoaded = (infos) => {
    console.log('seatMapLoaded', infos);
    setSeatStatus(infos.seatStatus);
    setseatKinds(infos.seatKinds);
    setLoading(false);
  };
  const seatMapError = (error) => {
    console.log('seatMapError', error);
  };

  React.useEffect(() => {
    if (mountEl.current.innerHTML.length === 0) {
      console.log('ReservedSeatMapWrapper');
      const el = ReservedSeatMapWrapper(mountEl.current, {
        eventIdentifier: '11efc20862006f4180f100155dab0b0d',
        customReserveIdentifier: 'de28aec6-fbb3-4265-80f0-88c0420990a5',
        totalTickets: totalTickets,
        onSeatSelectChanged: seatSelectChanged,
        onLoaded: seatMapLoaded,
        onError: seatMapError,
      });
    }
  });

  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <div id="remote-component" style={{width: '100%',
        minHeight: '300px',
        border: '1px solid #7c7879',
        padding: '0px',
        boxSizing: 'border-box',
        }}>
        <div ref={mountEl} 
          event-identifier="11efc20862006f4180f100155dab0b0d"
          order-intention="de28aec6-fbb3-4265-80f0-88c0420990a5">
        </div>
      </div>
      {loading && <div>Loading...</div>}

      <div>
      <button disabled={!allChosen}>Continuar</button>
      </div>

      <div style={{paddingTop: '15px'}}>Status:</div>
      {seatStatus.map(item => (
        <div style={{color: item.color ?? '' != '' ? item.color : null}}>
        {item.name}
        </div>
      ))}     

      <div style={{paddingTop: '15px'}}>Tipos:</div>
      {seatKinds.map(item => (
          <div>
            {((item.iconClassName ?? '') != '' || (item.iconText ?? '') != '') &&
              <span className={item.iconClassName} style={{paddingRight: '5px'}}>{item.iconText}</span>
            }
            {item.name}
          </div>
      ))}     

    </div>
  );
};

export default App;
