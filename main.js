// main.js

// Card Component
function ActivityCard({ activity }) {
    return (
      React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card-content" },
          React.createElement("h3", { className: "card-title" }, activity.name),
          React.createElement("p", { className: "card-description" }, activity.description),
          React.createElement("div", { className: "card-details" },
            React.createElement("div", { className: "detail" },
              React.createElement("span", { className: "icon" }, 
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "w-4 h-4" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 2C8.1 2 5 5.1 5 9c0 5.25 5.25 11 7 12.7 1.75-1.7 7-7.45 7-12.7 0-3.9-3.1-7-7-7zM12 11a2 2 0 100-4 2 2 0 000 4z" })
                )
              ),
              React.createElement("span", null, activity.venue)
            ),
            React.createElement("div", { className: "detail" },
              React.createElement("span", { className: "icon" }, 
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "w-4 h-4" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4l3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" })
                )
              ),
              React.createElement("span", null, activity.time)
            ),
            React.createElement("div", { className: "detail" },
              React.createElement("span", { className: "icon" }, 
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", className: "w-4 h-4" },
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zM6 22a10 10 0 1112 0H6z" })
                )
              ),
              React.createElement("span", null, activity.organiser)
            )
          ),
          // Cost at the bottom of the card
          React.createElement("div", { className: "card-cost" },
            React.createElement("span", { className: "font-medium" }, "Cost: "),
            React.createElement("span", null, activity.cost)
          )
        )
      )
    );
  }


// Main Component
function EnhancedServiceDirectory() {

const { useState } = React;


  // States for search term and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAudience, setFilterAudience] = useState([]);
  const [filterCost, setFilterCost] = useState([]);
  const [filterDays, setFilterDays] = useState([]);

  // Filter options
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const audiences = ['Children', 'Adults', 'Everyone'];
  const costs = ['Free', 'Low Cost', 'Other'];

  // Data array
  const activities = [
    {
      name: 'NEET support',
      description: 'NEET support for young people not in education,employment or training',
      audience: 'Children',
      ageRange: '16-21',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Monday 1pm-3pm',
      organiser: 'BASE',
      cost: 'Free',
      contact: '02088715222'
    },
    {
      name: 'After school snacks',
      description: 'After school snacks',
      audience: 'Children',
      ageRange: '8-18',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Monday 3.30pm- 4.30pm',
      organiser: 'BASE',
      cost: 'Free'
    },
    {
      name: 'NEET support',
      description: 'NEET support for young people not in education,employment or training',
      audience: 'Children',
      ageRange: '16-21',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Tuesday 1-3pm',
      organiser: 'BASE',
      cost: 'Free'
    },
    {
      name: 'NEET support',
      description: 'NEET support for young people not in education,employment or training',
      audience: 'Children',
      ageRange: '16-22',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Wednesday 1-3pm',
      organiser: 'BASE',
      cost: 'Free'
    },
    {
      name: 'NEET support',
      description: 'NEET support for young people not in education,employment or training',
      audience: 'Children',
      ageRange: '16-23',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Thursday 1-3pm',
      organiser: 'BASE',
      cost: 'Free'
    },
    {
      name: 'NEET support',
      description: 'NEET support for young people not in education,employment or training',
      audience: 'Children',
      ageRange: '16-24',
      venue: 'BASE Youth Club, 33-35 Danebury Avenue Roehampton SW15 4DQ',
      time: 'Friday 1-3pm',
      organiser: 'BASE',
      cost: 'Free'
    },
    {
      name: 'Community Lunch',
      description: 'Come along and join us for our free Brunch Cafe',
      audience: 'Everyone',
      venue: 'Chantelle\'s Community Kitchen',
      time: 'Friday 11am -1pm',
      organiser: 'Chantelle\'s Community Kitchen',
      cost: 'Donations appreciated if you feel able',
      contact: 'chantellescommunitykitchen@gmail.com @CCKRoehampton'
    },
    {
      name: 'Walking Group with the Health Champions',
      description: 'Make new friends and enjoy the beauty of Richmond Park',
      audience: 'Everyone',
      venue: 'Leaving from Manresa Clubroom, Fontley Way, SW15 4LY',
      time: 'Monday 11am',
      organiser: 'Estate Art',
      cost: 'Free',
      contact: 'estateartsw15@gmail.com'
    },
    {
      name: 'Quiz Night',
      description: 'Quiz night, £50 bar tab and bonus prizes to be won',
      audience: 'Adults',
      venue: 'Kings Head, 1 Roehampton High St, London SW15 4HL',
      time: 'Wednesday from 7.30pm',
      organiser: 'Kings Head',
      cost: '£2.50'
    },
    {
      name: 'Free cooked meal',
      description: 'Enjoy a healthy cooked meal on us!',
      audience: 'Everyone',
      venue: 'Roehampton Methodist Church, Minstead Gardens, Roehampton SW15 4EB',
      time: 'Saturday at 5pm',
      organiser: 'Roehampton Methodist Church',
      cost: 'Free'
    },
    {
      name: 'Tai Chi',
      description: 'Tai Chi sessions designed to promote relaxation and flexibility.',
      audience: 'Adults',
      venue: 'Barn Elms',
      time: '11:30AM-12:30PM Monday',
      organiser: 'Enable',
      cost: '£4-5',
      contact: 'active@enablelc.org'
    },
    {
      name: 'Yoga',
      description: 'Yoga classes focusing on mindfulness and physical well-being.',
      audience: 'Adults',
      venue: 'Newlands Hall',
      time: '9:30AM-10:30AM Thursday',
      organiser: 'Enable',
      cost: '£4-5',
      contact: 'active@enablelc.org'
    },
    {
      name: 'Stretch & Movement',
      description: 'Stretch and Movement classes aimed at improving mobility and reducing stiffness.',
      audience: 'Adults',
      venue: 'Newlands Hall',
      time: '10:30AM-11:30AM Thursday',
      organiser: 'Enable',
      cost: '£4-5',
      contact: 'active@enablelc.org'
    },
    {
      name: 'Tone & Stretch',
      description: 'Tone and Stretch sessions focusing on toning muscles and enhancing flexibility.',
      audience: 'Adults',
      venue: 'Roehampton Methodist Church',
      time: '11AM-12noon Friday',
      organiser: 'Enable',
      cost: '£4-5',
      contact: 'active@enablelc.org'
    }
  ];

  // Filtering function
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAudience = filterAudience.length === 0 || filterAudience.includes(activity.audience);
    const costType = activity.cost === 'Free' ? 'Free' : 
                    activity.cost.startsWith('£') && parseFloat(activity.cost.slice(1)) < 10 ? 'Low Cost' : 'Other';
    const matchesCost = filterCost.length === 0 || filterCost.includes(costType);
    const day = daysOfWeek.find(day => activity.time.toLowerCase().includes(day.toLowerCase()));
    const matchesDay = filterDays.length === 0 || (day && filterDays.includes(day));
    return matchesSearch && matchesAudience && matchesCost && matchesDay;
  });

    // Toggle filter options
    function toggleFilter(setFilter, value) {
        setFilter(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
      }

      return (
        React.createElement("div", { className: "container" },
          React.createElement("h1", null, "Community Activities"),
          React.createElement("input", {
            type: "text",
            placeholder: "Search activities...",
            className: "search-input",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }),
          
          // Days Filter Buttons
          React.createElement("div", { className: "filter-section" },
            React.createElement("h3", null, "Days"),
            daysOfWeek.map(day => 
              React.createElement("button", {
                key: day,
                className: filterDays.includes(day) ? 'filter-button active' : 'filter-button',
                onClick: () => toggleFilter(setFilterDays, day)
              }, day)
            )
          ),
    
          // Audience Filter Buttons
          React.createElement("div", { className: "filter-section" },
            React.createElement("h3", null, "Audience"),
            audiences.map(audience => 
              React.createElement("button", {
                key: audience,
                className: filterAudience.includes(audience) ? 'filter-button active' : 'filter-button',
                onClick: () => toggleFilter(setFilterAudience, audience)
              }, audience)
            )
          ),
    
          // Cost Filter Buttons
          React.createElement("div", { className: "filter-section" },
            React.createElement("h3", null, "Cost"),
            costs.map(cost => 
              React.createElement("button", {
                key: cost,
                className: filterCost.includes(cost) ? 'filter-button active' : 'filter-button',
                onClick: () => toggleFilter(setFilterCost, cost)
              }, cost)
            )
          ),
    
          // Display Activities
          React.createElement("div", { className: "activities" },
            filteredActivities.map((activity, index) =>
              React.createElement(ActivityCard, { key: index, activity })
            )
          )
        )
      );
}

// Render
ReactDOM.render(
  React.createElement(EnhancedServiceDirectory),
  document.getElementById('root')
);
