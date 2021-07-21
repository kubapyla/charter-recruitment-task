# Charter Recruitment Task

- Proposed dataset is in `data/fixtures`
- You can get new dataset each time you click on a `generate new dataset` button (this is using faker and dayjs to provide data)
- Homepage contains customers list, you can go to customer transactions list by clicking on `See list` button for each customer
- The customer transactions list is sorted in descending order by date
- You can see all transactions or filter by current/last/previous month
- Total reward points are visible above customer transactions list
- Reward points for current month are shown only when month is selected  
- Added tests for `getRewardPoints`, `getCustomerTransactions`, `getTransactionsFromMonth`
- Added simple snapshot tests for components just to showoff that adapter is working
- Added eslint and prettier to keep project clean
____

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
