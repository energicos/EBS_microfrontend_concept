<template>
  <section class="module-container">
    <main-content><!-- BEGIN MAIN CONTENT -->

      <navigation-level-2><!-- Begin Nav Level 2 -->
        <nav-level-2>
          <!-- Start key nav tabs -->
          <div class="container-body">
            <div class="key-nav-tabs">
              <button class="tab-home" onclick="location.href='#'"><i class="icon icon-nexus"></i></button>
              <button class="specific_module active" onclick="pagesetFunction(event, 'sales-overview')">Energy Meter</button>
              <button class="specific_module" onclick="pagesetFunction(event, 'procurement-overview')">Sensors</button>
              <button class="specific_module" onclick="pagesetFunction(event, 'service-overview')">Energy Generation</button>
              <button class="specific_module" onclick="pagesetFunction(event, 'service-overview')">Energy Distribution</button>
              <button class="specific_module" onclick="pagesetFunction(event, 'service-overview')">Valves / Fittings</button>
              <button class="specific_module" onclick="pagesetFunction(event, 'service-overview')">Energy Consumption</button>
            </div>
          </div>
          <!-- End key nav tabs -->
        </nav-level-2>
      </navigation-level-2><!-- End Nav Level 2 -->




      <!-- ======================================== --
              //                                          //
              //          BEGIN SALES OVERVIEW PAGE       //
              //                                          //
            -- ========================================== -->


      <div id="sales-overview" class="pagesets_section" style="display: block;"><!--======Start SALES OVERVIEW ======-->


        <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

          <sales-overview-page>
            <breadcrumbs><!-- Begin Breadcumbs -->
              <!-- Start breadcrumbs -->
              <div class="section-breadcrumbs">
                <ul class="breadcrumb">
                  <li><i class="icon icon-arrow-left"></i></li>
                  <li class="specific_module" onclick="#"><a href="#">Contract</a></li>
                  <li class="specific_module"><a href="#">Sales</a></li>
                  <li class="active"><a href="#">Overview</a></li>
                </ul>
              </div>
              <!-- End breadcrumbs -->
            </breadcrumbs><!-- End Breadcumbs -->

            <bookmarks><!-- Begin bookmarks addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Bookmarks</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </bookmarks><!-- End bookmarks addon -->

            <favorites><!-- Begin favorites addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Favorites</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </favorites><!-- End favorites addon -->

            <module-identity-title><!-- Begin MODULE TITLE -->
              <div align="center"><span class="module-name">Technical Asset Manager (TAM)</span></div>
            </module-identity-title><!-- End MODULE TITLE -->

            <pane-large><!-- Begin PANE-LARGE -->

              <overview-section>
                <overview-header-functions>
                  <div class="dataset-function-tabs"><!-- Start dataset function tabs -->
                    <button class="tab-export tooltip-top" data-tooltip="Export" onclick="location.href='#'"><i class="icon symbol-dataset icon-export"></i></button>
                    <button class="tab-analytics tooltip-top" data-tooltip="Analytics" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-analytics"></i></button>
                    <button class="tab-link tooltip-top" data-tooltip="Link" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-hyperlink"></i></button>

                  </div><!-- End dataset function tabs -->
                </overview-header-functions>

                <dataset-results-table>

                  <div class="container-body">
                    <div class="paginated-links"><!-- Start pagination -->
                      <ul class="pagination">
                        <li><a href="#"><i class="icon icon-arrow-left"></i></a></li>
                        <li><a class="active" href="#">1</a></li>
                        <li class="pagination-of">of</li>
                        <li><a href="#">12</a></li>
                        <li><a href="#"><i class="icon icon-arrow-right"></i></a></li>
                      </ul>
                    </div><!-- End Pagination -->
                  </div>


                  <div class="results-table" id="scroll"><!-- Begin Table -->


                    <div class="container-body">
                      <table class="pure-table pure-table-bordered" id="example">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Flag</th>
                          <th>ID</th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr><!-- Begin row 1 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="1a" class="fav-checkbox" /><label for="1a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="2a" class="flag-checkbox" checked/><label for="2a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="3a" class="white-checkbox" checked/><label for="3a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 1 -->

                        <tr><!-- Begin row 2 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="4a" class="fav-checkbox" /><label for="4a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="5a" class="flag-checkbox" /><label for="5a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="6a" class="white-checkbox" /><label for="6a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 2 -->

                        <tr><!-- Begin row 3 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="7a" class="fav-checkbox" checked/><label for="7a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="8a" class="flag-checkbox"/><label for="8a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="9a" class="white-checkbox" checked/><label for="9a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 3 -->

                        <tr><!-- Begin row 4 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="10a" class="fav-checkbox" /><label for="10a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="11a" class="flag-checkbox"/><label for="11a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="12a" class="white-checkbox"/><label for="12a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 4 -->

                        <tr><!-- Begin row 5 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="13a" class="fav-checkbox" /><label for="13a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="14a" class="flag-checkbox"/><label for="14a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="15a" class="white-checkbox"/><label for="15a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 5 -->

                        <tr><!-- Begin row 6 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="16a" class="fav-checkbox" /><label for="16a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="17a" class="flag-checkbox"/><label for="17a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="18a" class="white-checkbox"/><label for="18a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 6 -->

                        <tr><!-- Begin row 7 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="19a" class="fav-checkbox" /><label for="19a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="20a" class="flag-checkbox"/><label for="20a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="21a" class="white-checkbox"/><label for="21a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 7 -->

                        <tr><!-- Begin row 8 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="22a" class="fav-checkbox" /><label for="22a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="23a" class="flag-checkbox"/><label for="23a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="24a" class="white-checkbox"/><label for="24a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 8 -->

                        <tr><!-- Begin row 9 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="25a" class="fav-checkbox" /><label for="25a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="26a" class="flag-checkbox"/><label for="26a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="27a" class="white-checkbox"/><label for="27a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 9 -->

                        <tr><!-- Begin row 10 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="28a" class="fav-checkbox" /><label for="28a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="29a" class="flag-checkbox"/><label for="29a"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="30a" class="white-checkbox"/><label for="30a"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 10 -->


                        </tbody>
                      </table>
                    </div>


                  </div><!-- End Table -->


                </dataset-results-table>


                <!--Start applied filters -->
                <applied-filters>
                  <div class="container-body">
                    <div class="filtered">
                      <ul class="filtering">
                        <li>
													<span class="filter-icon">
													<i class="icon energicos-red icon-filter"></i></span><span class="filter-title">Filters Applied</span>
                        </li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                      </ul>
                    </div>

                  </div>
                </applied-filters>
                <!--End Applied filters -->

              </overview-section>


            </pane-large><!-- End PANE-LARGE -->

            <pane-small-last><!-- Begin PANE-SMALL-LAST -->

              <dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

                <short-info-title><!-- Start Title -->
                  <div class="container-body">
                    <span class="energicos-red most-important">Contracts</span>
                  </div>
                </short-info-title><!-- End Title -->
                <short-info-col-1>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="most-important energicos-dark pane-title">Contract</span></li>
                      <li>
                        <!--Start brief info -->
                        <div class="brief-info">
                          <ul class="more-details">
                            <li>Contract Type: <span class="actual-details">xxxx</span></li>
                            <li>Contract Partner: <span class="actual-details">xxxx</span></li>
                            <li>Operational Status: <span class="actual-details">xxxx</span></li>
                            <li>Start Date: <span class="actual-details">xxxx</span></li>
                            <li>End Date: <span class="actual-details">xxxx</span></li>
                          </ul>
                        </div>
                        <!--End brief info -->
                      </li>
                    </ul>
                  </div>
                </short-info-col-1>

                <short-info-col-2>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="energicos-red"><i class="icon icon-calendar"></i></span>
                        <span class="action">Last Action:</span> <span class="date">25.03.2017</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-comment"></i></span>
                        <span class="normal">8</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-activity"></i></span>
                        <span class="energicos-red normal-font">3</span> <span class="slash">/</span> <span class="energicos-blue normal-font">5</span> <span class="slash">/</span> <span class="energicos-darkgrey normal-font">8</span>
                      </li>
                    </ul>
                  </div>
                </short-info-col-2>

                <dataset-tags>
                  <div class="container-body">
                    <div class="horizontal-line"></div>
                    <ul class="tags">
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a></li>
                    </ul>
                    <div class="horizontal-line"></div>
                  </div>
                </dataset-tags>

                <subject-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Subject</h5>
                    </div>
                  </div>
                  <!--Start left links -->
                  <div class="lower-pane-1-navs-left-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-dataset"></i>
                              Dataset
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-comment"></i>
                              Comment
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-activity"></i>
                              Task
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-bookmark"></i>
                              Bookmark
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-tag"></i>
                              Tag
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-instance"></i>
                              Instance
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End left links -->
                </subject-area>

                <quick-action-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Quick Action</h5>
                    </div>
                  </div>
                  <!--Start right links -->
                  <div class="lower-pane-1-navs-right-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower-2">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-new"></i>
                              New<span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-edit"></i>
                              Edit <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-copy"></i>
                              Copy <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-save"></i>
                              Save <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-print"></i>
                              Print <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-lock"></i>
                              Lock <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="active specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                              Overview <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-summary"></i>
                              Summary <span class="arrow"></span>
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End right links -->

                </quick-action-area>


              </dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

            </pane-small-last><!-- End PANE-SMALL-LAST -->
          </sales-overview-page>

        </nav-level-2-tab-content><!-- END MAIN CONTENT -->


      </div><!--======End SALES OVERVIEW======-->


      <!-- ======================================== --
              //                                          //
              //         END SALES OVERVIEW PAGE        //
              //                                          //
            -- ========================================== -->





      <!-- ======================================== --
              //                                          //
              //      BEGIN PROCUREMENT OVERVIEW PAGE     //
              //                                          //
            -- ========================================== -->


      <div id="procurement-overview" class="pagesets_section" style="display: none;"><!--======Start PROCUREMENT OVERVIEW ======-->


        <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

          <procurement-overview-page>
            <breadcrumbs><!-- Begin Breadcumbs -->
              <!-- Start breadcrumbs -->
              <div class="section-breadcrumbs">
                <ul class="breadcrumb">
                  <li><i class="icon icon-arrow-left"></i></li>
                  <li class="specific_module" onclick="pagesetFunction(event, 'sales-page-overview')"><a href="contracts.html">Contract</a></li>
                  <li class="specific_module"><a href="#">Procurement</a></li>
                  <li class="active"><a href="#">Overview</a></li>
                </ul>
              </div>
              <!-- End breadcrumbs -->
            </breadcrumbs><!-- End Breadcumbs -->

            <bookmarks><!-- Begin bookmarks addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Bookmarks</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </bookmarks><!-- End bookmarks addon -->

            <favorites><!-- Begin favorites addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Favorites</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </favorites><!-- End favorites addon -->

            <module-identity-title><!-- Begin MODULE TITLE -->
              <div align="center"><span class="module-name">Technical Asset Manager (TAM)</span></div>
            </module-identity-title><!-- End MODULE TITLE -->

            <pane-large><!-- Begin PANE-LARGE -->

              <overview-section>
                <overview-header-functions>
                  <div class="dataset-function-tabs"><!-- Start dataset function tabs -->
                    <button class="tab-export tooltip-top" data-tooltip="Export" onclick="location.href='#'"><i class="icon symbol-dataset icon-export"></i></button>
                    <button class="tab-analytics tooltip-top" data-tooltip="Analytics" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-analytics"></i></button>
                    <button class="tab-link tooltip-top" data-tooltip="Link" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-hyperlink"></i></button>

                  </div><!-- End dataset function tabs -->
                </overview-header-functions>

                <dataset-results-table>

                  <div class="container-body">
                    <div class="paginated-links"><!-- Start pagination -->
                      <ul class="pagination">
                        <li><a href="#"><i class="icon icon-arrow-left"></i></a></li>
                        <li><a class="active" href="#">1</a></li>
                        <li class="pagination-of">of</li>
                        <li><a href="#">12</a></li>
                        <li><a href="#"><i class="icon icon-arrow-right"></i></a></li>
                      </ul>
                    </div><!-- End Pagination -->
                  </div>


                  <div class="results-table" id="scroll"><!-- Begin Table -->


                    <div class="container-body">
                      <table class="pure-table pure-table-bordered" id="example">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Flag</th>
                          <th>ID</th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr><!-- Begin row 1 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="1b" class="fav-checkbox" /><label for="1b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="2b" class="flag-checkbox" checked/><label for="2b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="3b" class="white-checkbox" checked/><label for="3b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 1 -->

                        <tr><!-- Begin row 2 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="4b" class="fav-checkbox" /><label for="4b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="5b" class="flag-checkbox" /><label for="5b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="6b" class="white-checkbox" /><label for="6b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 2 -->

                        <tr><!-- Begin row 3 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="7b" class="fav-checkbox" checked/><label for="7b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="8b" class="flag-checkbox"/><label for="8b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="9b" class="white-checkbox" checked/><label for="9b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 3 -->

                        <tr><!-- Begin row 4 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="10b" class="fav-checkbox" /><label for="10b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="11b" class="flag-checkbox"/><label for="11b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="12b" class="white-checkbox"/><label for="12b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 4 -->

                        <tr><!-- Begin row 5 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="13b" class="fav-checkbox" /><label for="13b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="14b" class="flag-checkbox"/><label for="14b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="15b" class="white-checkbox"/><label for="15b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 5 -->

                        <tr><!-- Begin row 6 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="16b" class="fav-checkbox" /><label for="16b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="17b" class="flag-checkbox"/><label for="17b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="18b" class="white-checkbox"/><label for="18b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 6 -->

                        <tr><!-- Begin row 7 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="19b" class="fav-checkbox" /><label for="19b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="20b" class="flag-checkbox"/><label for="20b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="21b" class="white-checkbox"/><label for="21b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 7 -->

                        <tr><!-- Begin row 8 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="22b" class="fav-checkbox" /><label for="22b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="23b" class="flag-checkbox"/><label for="23b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="24b" class="white-checkbox"/><label for="24b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 8 -->

                        <tr><!-- Begin row 9 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="25b" class="fav-checkbox" /><label for="25b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="26b" class="flag-checkbox"/><label for="26b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="27b" class="white-checkbox"/><label for="27b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 9 -->

                        <tr><!-- Begin row 10 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="28b" class="fav-checkbox" /><label for="28b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="29b" class="flag-checkbox"/><label for="29b"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="30b" class="white-checkbox"/><label for="30b"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 10 -->


                        </tbody>
                      </table>
                    </div>


                  </div><!-- End Table -->


                </dataset-results-table>


                <!--Start applied filters -->
                <applied-filters>
                  <div class="container-body">
                    <div class="filtered">
                      <ul class="filtering">
                        <li>
													<span class="filter-icon">
													<i class="icon energicos-red icon-filter"></i></span><span class="filter-title">Filters Applied</span>
                        </li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                      </ul>
                    </div>

                  </div>
                </applied-filters>
                <!--End Applied filters -->

              </overview-section>


            </pane-large><!-- End PANE-LARGE -->

            <pane-small-last><!-- Begin PANE-SMALL-LAST -->

              <dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

                <short-info-title><!-- Start Title -->
                  <div class="container-body">
                    <span class="energicos-red most-important">Contracts</span>
                  </div>
                </short-info-title><!-- End Title -->
                <short-info-col-1>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="most-important energicos-dark pane-title">Contract</span></li>
                      <li>
                        <!--Start brief info -->
                        <div class="brief-info">
                          <ul class="more-details">
                            <li>Contract Type: <span class="actual-details">xxxx</span></li>
                            <li>Contract Partner: <span class="actual-details">xxxx</span></li>
                            <li>Operational Status: <span class="actual-details">xxxx</span></li>
                            <li>Start Date: <span class="actual-details">xxxx</span></li>
                            <li>End Date: <span class="actual-details">xxxx</span></li>
                          </ul>
                        </div>
                        <!--End brief info -->
                      </li>
                    </ul>
                  </div>
                </short-info-col-1>

                <short-info-col-2>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="energicos-red"><i class="icon icon-calendar"></i></span>
                        <span class="action">Last Action:</span> <span class="date">25.03.2017</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-comment"></i></span>
                        <span class="normal">8</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-activity"></i></span>
                        <span class="energicos-red normal-font">3</span> <span class="slash">/</span> <span class="energicos-blue normal-font">5</span> <span class="slash">/</span> <span class="energicos-darkgrey normal-font">8</span>
                      </li>
                    </ul>
                  </div>
                </short-info-col-2>

                <dataset-tags>
                  <div class="container-body">
                    <div class="horizontal-line"></div>
                    <ul class="tags">
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a></li>
                    </ul>
                    <div class="horizontal-line"></div>
                  </div>
                </dataset-tags>

                <subject-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Subject</h5>
                    </div>
                  </div>
                  <!--Start left links -->
                  <div class="lower-pane-1-navs-left-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-dataset"></i>
                              Dataset
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-comment"></i>
                              Comment
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-activity"></i>
                              Task
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-bookmark"></i>
                              Bookmark
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-tag"></i>
                              Tag
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-instance"></i>
                              Instance
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End left links -->
                </subject-area>

                <quick-action-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Quick Action</h5>
                    </div>
                  </div>
                  <!--Start right links -->
                  <div class="lower-pane-1-navs-right-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower-2">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-new"></i>
                              New<span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-edit"></i>
                              Edit <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-copy"></i>
                              Copy <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-save"></i>
                              Save <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-print"></i>
                              Print <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-lock"></i>
                              Lock <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="active specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                              Overview <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-summary"></i>
                              Summary <span class="arrow"></span>
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End right links -->

                </quick-action-area>


              </dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

            </pane-small-last><!-- End PANE-SMALL-LAST -->
          </procurement-overview-page>

        </nav-level-2-tab-content><!-- END MAIN CONTENT -->


      </div><!--======End PROCUREMENT OVERVIEW======-->


      <!-- ======================================== --
              //                                          //
              //       END PROCUREMENT OVERVIEW PAGE      //
              //                                          //
            -- ========================================== -->






      <!-- ======================================== --
              //                                          //
              //         BEGIN SERVICE OVERVIEW PAGE      //
              //                                          //
            -- ========================================== -->


      <div id="service-overview" class="pagesets_section" style="display: none;"><!--======Start SERVICE OVERVIEW ======-->


        <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

          <service-overview-page>
            <breadcrumbs><!-- Begin Breadcumbs -->
              <!-- Start breadcrumbs -->
              <div class="section-breadcrumbs">
                <ul class="breadcrumb">
                  <li><i class="icon icon-arrow-left"></i></li>
                  <li class="specific_module" onclick="pagesetFunction(event, 'sales-page-overview')"><a href="contracts.html">Contract</a></li>
                  <li class="specific_module"><a href="#">Service</a></li>
                  <li class="active"><a href="#">Overview</a></li>
                </ul>
              </div>
              <!-- End breadcrumbs -->
            </breadcrumbs><!-- End Breadcumbs -->

            <bookmarks><!-- Begin bookmarks addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Bookmarks</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </bookmarks><!-- End bookmarks addon -->

            <favorites><!-- Begin favorites addon -->
              <div class="container-body">
                <ul>
                  <li><span class="most-important">Favorites</span></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 1<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 2<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-bookmark"></i>Folder 3<span class="icon icon-arrow-down"></span></a></li>
                  <li><a href="#"><i class="icon icon-bookmark-nav icon-settings3"></i>Settings</a></li>
                </ul>
              </div>
            </favorites><!-- End favorites addon -->

            <module-identity-title><!-- Begin MODULE TITLE -->
              <div align="center"><span class="module-name">Technical Asset Manager (TAM)</span></div>
            </module-identity-title><!-- End MODULE TITLE -->

            <pane-large><!-- Begin PANE-LARGE -->

              <overview-section>
                <overview-header-functions>
                  <div class="dataset-function-tabs"><!-- Start dataset function tabs -->
                    <button class="tab-export tooltip-top" data-tooltip="Export" onclick="location.href='#'"><i class="icon symbol-dataset icon-export"></i></button>
                    <button class="tab-analytics tooltip-top" data-tooltip="Analytics" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-analytics"></i></button>
                    <button class="tab-link tooltip-top" data-tooltip="Link" onclick="location.href='#'"><i class="icon symbol-tab-nav symbol-dataset icon-hyperlink"></i></button>

                  </div><!-- End dataset function tabs -->
                </overview-header-functions>

                <dataset-results-table>

                  <div class="container-body">
                    <div class="paginated-links"><!-- Start pagination -->
                      <ul class="pagination">
                        <li><a href="#"><i class="icon icon-arrow-left"></i></a></li>
                        <li><a class="active" href="#">1</a></li>
                        <li class="pagination-of">of</li>
                        <li><a href="#">12</a></li>
                        <li><a href="#"><i class="icon icon-arrow-right"></i></a></li>
                      </ul>
                    </div><!-- End Pagination -->
                  </div>


                  <div class="results-table" id="scroll"><!-- Begin Table -->


                    <div class="container-body">
                      <table class="pure-table pure-table-bordered" id="example">
                        <thead>
                        <tr>
                          <th>#</th>
                          <th>Flag</th>
                          <th>ID</th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th>Header<i class="icon order icon-up-down-arrow"></i></th>
                          <th></th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr><!-- Begin row 1 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="1c" class="fav-checkbox" /><label for="1c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="2c" class="flag-checkbox" checked/><label for="2c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="3c" class="white-checkbox" checked/><label for="3c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 1 -->

                        <tr><!-- Begin row 2 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="4c" class="fav-checkbox" /><label for="4c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="5c" class="flag-checkbox" /><label for="5c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="6c" class="white-checkbox" /><label for="6c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 2 -->

                        <tr><!-- Begin row 3 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="7c" class="fav-checkbox" checked/><label for="7c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="8c" class="flag-checkbox"/><label for="8c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="9c" class="white-checkbox" checked/><label for="9c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 3 -->

                        <tr><!-- Begin row 4 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="10c" class="fav-checkbox" /><label for="10c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="11c" class="flag-checkbox"/><label for="11c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="12c" class="white-checkbox"/><label for="12c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 4 -->

                        <tr><!-- Begin row 5 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="13c" class="fav-checkbox" /><label for="13c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="14c" class="flag-checkbox"/><label for="14c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="15c" class="white-checkbox"/><label for="15c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 5 -->

                        <tr><!-- Begin row 6 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="16c" class="fav-checkbox" /><label for="16c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="17c" class="flag-checkbox"/><label for="17c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="18c" class="white-checkbox"/><label for="18c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 6 -->

                        <tr><!-- Begin row 7 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="19c" class="fav-checkbox" /><label for="19c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="20c" class="flag-checkbox"/><label for="20c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="21c" class="white-checkbox"/><label for="21c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 7 -->

                        <tr><!-- Begin row 8 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="22c" class="fav-checkbox" /><label for="22c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="23c" class="flag-checkbox"/><label for="23c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="24c" class="white-checkbox"/><label for="24c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 8 -->

                        <tr><!-- Begin row 9 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="25c" class="fav-checkbox" /><label for="25c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="26c" class="flag-checkbox"/><label for="26c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="27c" class="white-checkbox"/><label for="27c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 9 -->

                        <tr><!-- Begin row 10 -->
                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="28c" class="fav-checkbox" /><label for="28c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="29c" class="flag-checkbox"/><label for="29c"></label>
                            </div>
                          </td>

                          <td align="center">
                            <div class="checkbox-element">
                              <input type="checkbox" id="30c" class="white-checkbox"/><label for="30c"></label>
                            </div>
                          </td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td class="table-text">text</td>
                          <td>
                            <div class="next-arrow">
                              <a class="specific_module" onclick="pagesetFunction(event, '#')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                            </div>
                          </td>
                        </tr><!--End row 10 -->


                        </tbody>
                      </table>
                    </div>


                  </div><!-- End Table -->


                </dataset-results-table>


                <!--Start applied filters -->
                <applied-filters>
                  <div class="container-body">
                    <div class="filtered">
                      <ul class="filtering">
                        <li>
													<span class="filter-icon">
													<i class="icon energicos-red icon-filter"></i></span><span class="filter-title">Filters Applied</span>
                        </li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                        <li><a href="#" class="btn btn-filter" onclick="location.href='#'">Filter</a></li>
                      </ul>
                    </div>

                  </div>
                </applied-filters>
                <!--End Applied filters -->

              </overview-section>


            </pane-large><!-- End PANE-LARGE -->

            <pane-small-last><!-- Begin PANE-SMALL-LAST -->

              <dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

                <short-info-title><!-- Start Title -->
                  <div class="container-body">
                    <span class="energicos-red most-important">Contracts</span>
                  </div>
                </short-info-title><!-- End Title -->
                <short-info-col-1>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="most-important energicos-dark pane-title">Contract</span></li>
                      <li>
                        <!--Start brief info -->
                        <div class="brief-info">
                          <ul class="more-details">
                            <li>Contract Type: <span class="actual-details">xxxx</span></li>
                            <li>Contract Partner: <span class="actual-details">xxxx</span></li>
                            <li>Operational Status: <span class="actual-details">xxxx</span></li>
                            <li>Start Date: <span class="actual-details">xxxx</span></li>
                            <li>End Date: <span class="actual-details">xxxx</span></li>
                          </ul>
                        </div>
                        <!--End brief info -->
                      </li>
                    </ul>
                  </div>
                </short-info-col-1>

                <short-info-col-2>
                  <div class="container-body">
                    <ul class="contacts">
                      <li><span class="energicos-red"><i class="icon icon-calendar"></i></span>
                        <span class="action">Last Action:</span> <span class="date">25.03.2017</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-comment"></i></span>
                        <span class="normal">8</span>
                      </li>
                      <li><span class="energicos-red"><i class="icon icon-activity"></i></span>
                        <span class="energicos-red normal-font">3</span> <span class="slash">/</span> <span class="energicos-blue normal-font">5</span> <span class="slash">/</span> <span class="energicos-darkgrey normal-font">8</span>
                      </li>
                    </ul>
                  </div>
                </short-info-col-2>

                <dataset-tags>
                  <div class="container-body">
                    <div class="horizontal-line"></div>
                    <ul class="tags">
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a></li>
                      <li><a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a></li>
                    </ul>
                    <div class="horizontal-line"></div>
                  </div>
                </dataset-tags>

                <subject-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Subject</h5>
                    </div>
                  </div>
                  <!--Start left links -->
                  <div class="lower-pane-1-navs-left-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-dataset"></i>
                              Dataset
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-comment"></i>
                              Comment
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-activity"></i>
                              Task
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-bookmark"></i>
                              Bookmark
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-tag"></i>
                              Tag
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-instance"></i>
                              Instance
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End left links -->
                </subject-area>

                <quick-action-area>
                  <div class="sub-title">
                    <div class="container-body">
                      <h5 class="sub-module-title">Quick Action</h5>
                    </div>
                  </div>
                  <!--Start right links -->
                  <div class="lower-pane-1-navs-right-links">
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content-lower-2">

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-new"></i>
                              New<span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-edit"></i>
                              Edit <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-copy"></i>
                              Copy <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-save"></i>
                              Save <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-print"></i>
                              Print <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-lock"></i>
                              Lock <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="active specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                              Overview <span class="arrow"></span>
                            </a>
                          </li>

                          <li class="specific_module" onclick="#">
                            <a href="#"><i class="icon energicos-red icon-side-nav icon-summary"></i>
                              Summary <span class="arrow"></span>
                            </a>
                          </li>


                        </ul>
                      </div>
                    </div><!--End mid Menu -->

                  </div>
                  <!--End right links -->

                </quick-action-area>


              </dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

            </pane-small-last><!-- End PANE-SMALL-LAST -->
          </service-overview-page>

        </nav-level-2-tab-content><!-- END MAIN CONTENT -->


      </div><!--======End PROCUREMENT OVERVIEW======-->


      <!-- ======================================== --
              //                                          //
              //         END SERVICE OVERVIEW PAGE        //
              //                                          //
            -- ========================================== -->




    </main-content>
  </section>

</template>

<script>
  export default {
  }
</script>

<style>

</style>
