// import React, { Component } from 'react';
// import movies from "./data"

// class SortButtons extends Component {
//     state = {
//         movies: movies
//     }

//     sortAZ = () => {
//         const sortedData = this.props.movies.sort((a, b) => {
//             if (a.title < b.title) {
//                 return - 1;
//             }
//             else if (a.title > b.title) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//         this.setState({ movies: sortedData });
//     }

//     sortZA = () => {
//         const sortedData = this.state.movies.sort((a, b) => {
//             if (b.title < a.title) {
//                 return - 1;
//             }
//             else if (b.title > a.title) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//         this.setState({ movies: sortedData });
//     }

//     sortByYearAsc = () => {
//         const sortedData = this.state.movies.sort((a, b) => {
//             if (a.year < b.year) {
//                 return - 1;
//             }
//             else if (a.year > b.year) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//         this.setState({ movies: sortedData });
//     }

//     sortByYearDesc = () => {
//         const sortedData = this.state.movies.sort((a, b) => {
//             if (b.year < a.year) {
//                 return - 1;
//             }
//             else if (b.year > a.year) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//         this.setState({ movies: sortedData });
//     }

//     sortByRating = () => {
//         const sortedData = this.state.movies.sort((a, b) => {
//             if (a.rate < b.rate) {
//                 return - 1;
//             }
//             else if (a.rate > b.rate) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//         this.setState({ movies: sortedData });
//     }

//     render() {
//         return (
//             <div className="sorting-btn">
//                 <input type="button" value="A-Z" onClick={this.sortAZ} />
//                 <input type="button" value="Z-A" onClick={this.sortZA} />
//                 <input type="button" value="Sort By Year Ascending" onClick={this.sortByYearAsc} />
//                 <input type="button" value="Sort By Year Descending" onClick={this.sortByYearDesc} />
//                 <input type="button" value="Sort By Rating" onClick={this.sortByRating} />
//             </div>
//         );
//     }
// }

// export default SortButtons;