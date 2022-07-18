import { oneMonth, oneYear } from "./data";

//Creating dynamic path for icons in public folder
const iconPath = process.env.PUBLIC_URL + "/ratingIcons/";

function navigateToWebsite(url) {
  window.location.href = `${url}`;
}

//Returns a <tr> element for each item in the oneMonth list
export function monthCompanyItems() {
  return oneMonth.map((item) => {
    const { url, companyName, rating, _id } = item.company;
    const { totalSpent } = item;
    return (
      <tr key={_id} onClick={() => navigateToWebsite(url)}>
        <td>
          <img
            src={`${iconPath}emoji-${rating}.svg`}
            alt={`${rating} emoji icon`}
          />
          {companyName}
        </td>
        <td>
          ${totalSpent.toFixed(2)}{" "}
          <span className="material-symbols-outlined forwardArrow">
            arrow_forward_ios
          </span>
        </td>
      </tr>
    );
  });
}

//Returns a <tr> element for each item in the oneYear list
export function yearCompanyItems() {
  return oneYear.map((item) => {
    //Destructure item company object
    const { url, companyName, rating, _id } = item.company;
    const { totalSpent } = item;

    return (
      <tr key={_id} onClick={() => navigateToWebsite(url)}>
        <td>
          <img
            src={`${iconPath}emoji-${rating}.svg`}
            alt={`${rating} emoji icon`}
          />
          {companyName}
        </td>
        <td>
          ${totalSpent.toFixed(2)}{" "}
          <span className="material-symbols-outlined forwardArrow">
            arrow_forward_ios
          </span>
        </td>
      </tr>
    );
  });
}
