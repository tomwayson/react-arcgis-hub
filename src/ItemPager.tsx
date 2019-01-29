import * as React from 'react';
import { t } from './utils';

/*
  Pagination controls that work with the ArcGIS Online style of pagination
  Takes:
    - pageSize
    - totalCount
    - pageNumber not an index, a page number (ie, 1 based, not 0 based)
    - changePage: a function that will get called with the page number to change to
*/
interface ItemPagerProps {
  pageSize: number;
  totalCount: number;
  pageNumber: number;
  changePage?: (pageNumber: number) => void;
  // TODO: :intlShape
  intl?: any;
}
const ItemPager: React.SFC<ItemPagerProps> = ({ pageSize, totalCount, pageNumber, changePage, intl }) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (!totalPages || totalPages < 2) {
    // don't show pagination
    return null;
  }

  // get the range of pages to show
  const currentPage = pageNumber;
  const start = totalPages > 10 && currentPage > 6 ? currentPage - 5 : 1;
  const end = totalPages > start + 9 ? start + 9 : totalPages;
  const isFirstPage = currentPage === 1;
  const lastPage = totalPages;
  const isLastPage = pageNumber >= lastPage;

  // generate links for each page in the range
  const pageLinks = [];
  for (let i = start; i <= end; i++) {
    pageLinks.push(
      <PageItem
        pageNumber={i}
        currentPage={currentPage}
        changePage={changePage}
        key={i}
      >
        {i}
      </PageItem>
    );
  }
  return (
    <ul className="pagination">
      {/* first and previous links */}
      <PageItem
        pageNumber={1}
        currentPage={currentPage}
        changePage={changePage}
        key="&laquo;"
        label={t('arcgisHub.ItemPager.firstPage', intl)}
        disabled={isFirstPage}
      >
        &laquo;
      </PageItem>
      <PageItem
        pageNumber={currentPage - 1}
        currentPage={currentPage}
        changePage={changePage}
        key="&lsaquo;"
        label={t('arcgisHub.ItemPager.previousPage', intl)}
        disabled={isFirstPage}
      >
        &lsaquo;
      </PageItem>
      {/* a link for each page */}
      {pageLinks}
      {/* next and last links */}
      <PageItem
        pageNumber={currentPage + 1}
        currentPage={currentPage}
        changePage={changePage}
        key="&rsaquo;"
        label={t('arcgisHub.ItemPager.nextPage', intl)}
        disabled={isLastPage}
      >
        &rsaquo;
      </PageItem>
      <PageItem
        pageNumber={lastPage}
        currentPage={currentPage}
        changePage={changePage}
        key="&raquo;"
        label={t('arcgisHub.ItemPager.lastPage', intl)}
        disabled={isLastPage}
      >
        &raquo;
      </PageItem>
    </ul>
  );
}

interface PageItemProps {
  pageNumber: number;
  currentPage: number;
  disabled?: boolean;
  label?: string;
  changePage?: (pageNumber: number) => void;
}
class PageItem extends React.Component<PageItemProps> {
  onClick = (e: any) => {
    e.preventDefault();
    const { changePage, disabled, pageNumber } = this.props;
    if (!disabled && changePage) {
      changePage(pageNumber);
    }
  };
  render() {
    const { currentPage, disabled, pageNumber, label } = this.props;
    const isActive = !disabled && pageNumber === currentPage;
    const className = `page-item${isActive && ' active'}`;
    const ariaLabel = disabled ? 'disabled' : label || `Page ${pageNumber}`;
    return (
      <li className={className}>
        <a
          className="page-link"
          href=""
          onClick={this.onClick}
          aria-label={ariaLabel}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default ItemPager;
