import { oneMonth, oneYear } from "./data";

//Creating dynamic path for icons in public folder
const iconPath = process.env.PUBLIC_URL + "/ratingIcons/";

function navigateToWebsite(url) {
  window.location.href = `${url}`;
}

//Returns a <tr> element for each item in the oneMonth list
export function monthCompanyItems() {
  return oneMonth.map((item) => {
    return (
      <tr key={item._id} onClick={() => navigateToWebsite(item.company.url)}>
        <td>
          <img
            src={`${iconPath}emoji-${item.company.rating}.svg`}
            alt={`${item.company.rating} emoji icon`}
          />
          {item.company.companyName}
        </td>
        <td>
          ${item.totalSpent.toFixed(2)}{" "}
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
    return (
      <tr key={item._id} onClick={() => navigateToWebsite(item.company.url)}>
        <td>
          <img
            src={`${iconPath}emoji-${item.company.rating}.svg`}
            alt={`${item.company.rating} emoji icon`}
          />
          {item.company.companyName}
        </td>
        <td>
          ${item.totalSpent.toFixed(2)}{" "}
          <span className="material-symbols-outlined forwardArrow">
            arrow_forward_ios
          </span>
        </td>
      </tr>
    );
  });
}
