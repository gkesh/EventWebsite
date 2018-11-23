class Contents {
    constructor() {
        Object.defineProperty(
            this,
            "day1table", {
                get: function() {
                    return `
            <table>
      <thead>
      <tr>
      <th scope="col">Genre</th>
      <th scope="col">Event</th>
      <th scope="col">Location</th>
      <th scope="col">Time</th>
      </tr>

      </thead>
      <tbody>
      <tr>
      <td colspan='3' class='tbl-event tbl-visible'>Opening Ceremony</td>
      <td class='tbl-time tbl-visible'>7:00 - 9:30</td>
      </tr>
      <tr>
      <td colspan='2' class='tbl-event tbl-visible'>Panel Discussion</td>
      <td rowspan='5'><b>Hall 1</b></td>
      <td class='tbl-time tbl-visible'>10:00 - 11:50</td>
      </tr>
      <tr>
      <td>Simulation</td>
      <td class='tbl-event tbl-visible'>Augmented Reality</td>
      <td class='tbl-time tbl-visible'>12:00 - 12:50</td>
      </tr>
      <tr>
      <td>Research</td>
      <td class='tbl-event tbl-visible'>Exploring Research Horizons</td>
      <td class='tbl-time tbl-visible'>1:00 - 1:50</td>
      </tr>
      <tr>
      <td rowspan='2'>AI & Data Science</td>
      <td class='tbl-event tbl-visible'>AI - The future of Technology</td>
      <td class='tbl-time tbl-visible'>2:00 - 2:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>Python and Data Science</td>
      <td class='tbl-time tbl-visible'>3:00 - 4:50</td>
      </tr>


      <tr>
      <td rowspan='3'>CS &amp; Networking</td>
      <td class='tbl-event tbl-visible'>Ethical Hacking</td>
      <td rowspan='7'><b>Hall 2</b></td>
      <td class='tbl-time tbl-visible'>10:00 - 10:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>Cyber Security(Sheilding Your Cyber Space)</td>
      <td class='tbl-time tbl-visible'>11:00 - 11:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>CISCO</td>
      <td class='tbl-time tbl-visible'>12:00 - 12:50</td>
      </tr>
      <tr>
      <td rowspan='4'>DM & EN</td>
      <td class='tbl-event tbl-visible'>Unlearning Marketing</td>
      <td class='tbl-time tbl-visible'>1:00 - 1:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>Business Etiquettes</td>
      <td class='tbl-time tbl-visible'>2:00 - 2:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>Online Kick Starter</td>
      <td class='tbl-time tbl-visible'>3:00 - 3:50</td>
      </tr>
      <tr>
      <td class='tbl-event tbl-visible'>Vlogging</td>
      <td class='tbl-time tbl-visible'>4:00 - 4:50</td>
      </tr>
      </tbody>
      </table>
           `;
                },
                set: function(val) {
                    //Do Nothing
                }
            });
        Object.defineProperty(
            this,
            "day2table", {
                get: function() {
                    return `
                <table>
          <thead>
          <tr>
          <th scope="col">Genre</th>
          <th scope="col">Event</th>
          <th scope="col">Location</th>
          <th scope="col">Time</th>
          </tr>

          </thead>
          <tbody>
          <tr>
          <td rowspan='7'>Career Related</td>
          <td class='tbl-event tbl-visible'>What Industry Wants?</td>
          <td rowspan='7'><b>Hall 1</b></td>
          <td class='tbl-time tbl-visible'>10:00 - 11:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Women In Technology</td>
          <td class='tbl-time tbl-visible'>11:00 - 12:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Necessary Knowledge During Bachelors</td>
          <td class='tbl-time tbl-visible'>12:00 - 1:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Career Possibilities in IT</td>
          <td class='tbl-time tbl-visible'>1:00 - 2:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Success Story</td>
          <td class='tbl-time tbl-visible'>2:00 - 3:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Playing with Mind</td>
          <td class='tbl-time tbl-visible'>3:00 - 4:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>App Showcase</td>
          <td class='tbl-time tbl-visible'>4:00 - 5:00</td>
          </tr>


          <tr>
          <td rowspan='4'>Game of Excellence</td>
          <td class='tbl-event tbl-visible'>Photography - The Best Click</td>
          <td rowspan='4'><b>Hall 2</b></td>
          <td class='tbl-time tbl-visible'>10:00 - 11:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Programming Contest</td>
          <td class='tbl-time tbl-visible'>11:00 - 2:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>Corporate Roadies</td>
          <td class='tbl-time tbl-visible'>2:00 - 3:00</td>
          </tr>
          <tr>
          <td class='tbl-event tbl-visible'>i-GOT Idea</td>
          <td class='tbl-time tbl-visible'>3:00 - 4:00</td>
          </tr>
          </tbody>
          </table>
               `;
                },
                set: function(val) {
                    //Do Nothing
                }
            });
    }
}
