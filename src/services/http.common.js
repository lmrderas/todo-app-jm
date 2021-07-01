import axios from 'axios';

export default axios.create({
  baseURL: 'https://auto.loanvantage360.com/fps/api',
  headers: {
    Authorization:
      'Basic YzQ2ZWVhM2QtY2MxNi00MGMwLTkwOTYtNjJiMGE3YjFlM2MzOmUxNTQ4M2FmLTk4OGQtNDc1My1iYjU5LTkyNmU4ZDAwZjQzMw==',
    'Content-type': 'application/json',
  },
});
