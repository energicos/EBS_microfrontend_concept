<template>
  <section class="module-container">
    <main-content><!-- BEGIN MAIN CONTENT -->

      <navigation-level-2><!-- Begin Nav Level 2 -->
        <nav-level-2>
          <!-- Start key nav tabs -->
          <div class="container-body">
            <div class="key-nav-tabs">
              <button class="tab-home" onclick="location.href='#'"><i class="icon icon-nexus"></i></button>
              <button class="sub_module" onclick="location.href='#'">CRM</button>
              <button class="sub_module" onclick="location.href='#'">Finance</button>
              <button class="sub_module" onclick="location.href='#'">Telemetry</button>
              <button class="sub_module" onclick="location.href='#'">TAM</button>
              <button class="sub_module" onclick="location.href='#'">Products</button>
              <button class="sub_module" onclick="location.href='#'">References</button>
              <button class="sub_module" onclick="location.href='#'">Analysis</button>
              <button class="sub_module" onclick="location.href='#'">Algorithms</button>
              <button class="sub_module active" onclick="location.href='#'">Database</button>
            </div>
          </div>
          <!-- End key nav tabs -->
        </nav-level-2>
      </navigation-level-2><!-- End Nav Level 2 -->


      <div id="settings-database-tab" class="tabsets_section" style="display: block;"><!--======Start CONTACT MANAGER TAB ======-->



        <!-- ============================== --
              //                                //
              //      BEGIN TAG MANAGER PAGE     //
              //                                //
            -- ================================ -->


        <div id="tag-manager-page" class="pagesets_section" style="display: block;"><!--======Start TAG MANAGER PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <tag-manager-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Tag Manager</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Tag Manager</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Tag Name</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-status">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Tag Status</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="active specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interfaces<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->

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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->


              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="javascript:void(0)" onclick="#"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="javascript:void(0)" onclick="pagesetFunction(event, 'group-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Tag Manager</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Tag Name<span class="required"></span></label>
                            <input type="text" name="tag_name" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>Tag Security Status<span class="required"></span></label>
                            <select name="tag_security_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Tag Decription<span class="required"></span></label>
                            <textarea wrap="off" name="tag_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>

                        <div class="form-part-2">
                          <div class="data-input">
                            <label>Tag Status<span class="required"></span></label>
                            <select name="tag_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->



              <pane-small-last><!-- Begin PANE-SMALL-LAST -->



                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab1" class="" onclick="tab_1('tab1')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab2" class="" onclick="tab_1('tab2')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab3" class="" onclick="tab_1('tab3')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab4" class="" onclick="tab_1('tab4')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab5" class="active" onclick="tab_1('tab5')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab1" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div id="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab2" style="display: none;">
                      <div id="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab1" class="active" onclick="sub_tab1('mini_tab1')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab2" onclick="sub_tab1('mini_tab2')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab3" onclick="sub_tab1('mini_tab3')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab1">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab2" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab3" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab3" style="display: none;">
                      <div id="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>


                    <div id="tab4" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>


                    <div id="tab5">
                      <div id="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </tag-manager-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End TAG MANAGER PAGE======-->


        <!-- ============================== --
              //                                //
              //       END TAG MANAGER PAGE     //
              //                                //
            -- ================================ -->




        <!-- ================================== --
              //                                    //
              //       BEGIN GROUP MANAGER PAGE     //
              //                                    //
            -- ==================================== -->


        <div id="group-manager-page" class="pagesets_section" style="display: none;"><!--======Start PERSONAL PROFILE PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <group-manager-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Group Manager</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Group Manager</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Group Name</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-status">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Group Status</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interfaces<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->

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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->


              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'tag-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'role-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Role Manager</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">

                          <div class="data-input">
                            <label>Group Name<span class="required"></span></label>
                            <input type="text" name="group_name" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>Group Security Status<span class="required"></span></label>
                            <select name="group_security_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Male</option>
                              <option value="">Female</option>
                            </select>
                          </div>


                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Group Status<span class="required"></span></label>
                            <select name="group_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Male</option>
                              <option value="">Female</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Group Description<span class="required"></span></label>
                            <textarea wrap="off" name="group_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab6" class="" onclick="tab_2('tab6')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab7" class="" onclick="tab_2('tab7')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab8" class="" onclick="tab_2('tab8')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab9" class="" onclick="tab_2('tab9')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab10" class="active" onclick="tab_2('tab10')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab6" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab7" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab4" class="active" onclick="sub_tab2('mini_tab4')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab5" onclick="sub_tab2('mini_tab5')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab6" onclick="sub_tab2('mini_tab6')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab4">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab5" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab6" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab8" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab9" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab10">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </group-manager-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End GROUP MANAGER PAGE======-->


        <!-- ================================== --
              //                                    //
              //        END GROUP MANAGER PAGE      //
              //                                    //
            -- ==================================== -->





        <!-- ================================== --
              //                                    //
              //       BEGIN ROLE MANAGER PAGE      //
              //                                    //
            -- ==================================== -->


        <div id="role-manager-page" class="pagesets_section" style="display: none;"><!--======Start ROLE MANAGER PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <role-manager-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Role Manager</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Group Manager</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Group Name</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-status">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Group Status</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interfaces<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->

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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'group-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'status-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Role Manager</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">

                          <div class="data-input">
                            <label>Role Name<span class="required"></span></label>
                            <input type="text" name="role_name" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>Role Security Status</label>
                            <select name="role_security_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Role Status</label>
                            <select name="role_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Role Description<span class="required"></span></label>
                            <textarea wrap="off" name="role_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>


                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab11" class="" onclick="tab_3('tab11')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab12" class="" onclick="tab_3('tab12')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab13" class="" onclick="tab_3('tab13')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab14" class="" onclick="tab_3('tab14')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab15" class="active" onclick="tab_3('tab15')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab11" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab12" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab7" class="active" onclick="sub_tab3('mini_tab7')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab8" onclick="sub_tab3('mini_tab8')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab9" onclick="sub_tab3('mini_tab9')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab7">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab8" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab9" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab13" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab14" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab15">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </role-manager-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End ROLE MANAGER PAGE======-->


        <!-- ================================== --
              //                                    //
              //       END ROLE MANAGER PAGE        //
              //                                    //
            -- ==================================== -->




        <!-- =================================================== --
              //                                                   //
              //             BEGIN STATUS-MANAGER-PAGE             //
              //                                                   //
            -- ==================================================== -->


        <div id="status-manager-page" class="pagesets_section" style="display: none;"><!--======Start STATUS MANAGER PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <status-manager-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Status Manager</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Status Manager</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Status Name</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-category">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Status Category</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interfaces<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->

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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'role-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'communication-interfaces-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Status Manager</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">

                          <div class="data-input">
                            <label>Status Name<span class="required"></span></label>
                            <input type="text" name="status_name" class="field-long" placeholder="- Input Value -" />
                          </div>


                          <div class="data-input">
                            <label>Status Description<span class="required"></span></label>
                            <textarea wrap="off" name="status_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>

                        <div class="form-part-2">


                          <div class="data-input">
                            <label>Status Category<span class="required"></span></label>
                            <select name="status_category" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab16" class="" onclick="tab_4('tab16')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab17" class="" onclick="tab_4('tab17')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab18" class="" onclick="tab_4('tab18')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab19" class="" onclick="tab_4('tab19')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab20" class="active" onclick="tab_4('tab20')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab16" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab17" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab10" class="active" onclick="sub_tab4('mini_tab10')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab11" onclick="sub_tab4('mini_tab11')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab12" onclick="sub_tab4('mini_tab12')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab10">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab11" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab12" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab18" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab19" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab20">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </status-manager-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End STATUS-MANAGER-PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //              END STATUS-MANAGER-PAGE              //
              //                                                   //
            -- ==================================================== -->




        <!-- =================================================== --
              //                                                   //
              //       BEGIN COMMUNICATION-INTERFACES-PAGE         //
              //                                                   //
            -- ==================================================== -->


        <div id="communication-interfaces-page" class="pagesets_section" style="display: none;"><!--======Start COMMUNICATION INTERFACES PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <communication-interfaces-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Communication Interfaces</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->


              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Communication Interfaces</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Communication interfaces Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interfaces<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->

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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->





              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'status-manager-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'general-settings-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Communication Interfaces</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Communication Interfaces Name<span class="required"></span></label>
                            <input type="text" name="communication_interfaces_name" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>Communication Interface Encryption<span class="required"></span></label>
                            <select name="Street" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>



                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Communication Interface Protocol<span class="required"></span></label>
                            <select name="communication_interface_protocol" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>


                          <div class="data-input">
                            <label>Communication Interfaces Description<span class="required"></span></label>
                            <textarea wrap="off" name="communiation_interfaces_desc" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>


                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab21" class="" onclick="tab_5('tab21')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab22" class="" onclick="tab_5('tab22')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab23" class="" onclick="tab_5('tab23')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab24" class="" onclick="tab_5('tab24')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab25" class="active"  onclick="tab_5('tab25')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab21" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab22" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab13" class="active" onclick="sub_tab5('mini_tab13')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab14" onclick="sub_tab5('mini_tab14')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab15" onclick="sub_tab5('mini_tab15')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab13">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab14" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab15" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab23" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab24" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab25">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </communication-interfaces-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End COMMUNICATION-INTERFACES-PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //          END COMMUNICATION-INTERFACES-PAGE        //
              //                                                   //
            -- ==================================================== -->





        <!-- =================================================== --
              //                                                   //
              //           BEGIN GENERAL-SETTINGS--PAGE            //
              //                                                   //
            -- ==================================================== -->


        <div id="general-settings-page" class="pagesets_section" style="display: none;"><!--======Start GENERAL SETTINGS PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <general-settings-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="specific_module" onclick="#"><a href="#">General Settings</a></li>
                    <li class="active"><a href="#">Unit types</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-2><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">General Settings</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Unit Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interf<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->



                  <sub-menu-level-3><!-- Begin SUB-MENU-LEVEL 3 -->
                    <div class="sub-title">
                      <div class="container-body">
                        <h5 class="sub-module-title">Settings</h5>
                      </div>
                    </div>

                    <div class="main-mid-menu">
                      <div class="menu-list">

                        <ul id="sub-menu-content">

                          <li class="active specific_module" onclick="pagesetFunction(event, 'general-settings-page')">
                            <a href="#">Unit Types<span class="arrow"></span></a>
                          </li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'activity-type-page')">
                            <a href="#">Activity Type<span class="arrow"></span></a>
                          </li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'task-type-page')">
                            <a href="#">Task Type<span class="arrow"></span></a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </sub-menu-level-3><!-- End SUB-MENU-LEVEL 3 -->



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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-2><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->


              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'communication-interfaces-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'activity-type-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Unit Types</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Unit Name<span class="required"></span></label>
                            <input type="text" name="unit_name" class="field-long" placeholder=" - Input Value -" />
                          </div>


                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Description<span class="required"></span></label>
                            <textarea wrap="off" name="description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab26" class="" onclick="tab_6('tab26')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab27" class="" onclick="tab_6('tab27')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab28" class="" onclick="tab_6('tab28')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab29" class="" onclick="tab_6('tab29')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab30" class="active" onclick="tab_6('tab30')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab26" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab27" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab16" class="active" onclick="sub_tab6('mini_tab16')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab17" onclick="sub_tab6('mini_tab17')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab18" onclick="sub_tab6('mini_tab18')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab16">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab17" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab18" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab28" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab29" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab30">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </general-settings-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End GENERAL-SETTINGS-PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //              END GENERAL-SETTINGS-PAGE            //
              //                                                   //
            -- ==================================================== -->





        <!-- =================================================== --
              //                                                     //
              //              BEGIN FINANCIAL-PROFILE-PAGE           //
              //                                                     //
            -- ==================================================== -->


        <div id="activity-type-page" class="pagesets_section" style="display: none;"><!--======Start ACTIVITY TYPE PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <activity-type-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="specific_module" onclick="#"><a href="#">General Settings</a></li>
                    <li class="active"><a href="#">Activity Types</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-2><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">General Settings</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Activity Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interf<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->



                  <sub-menu-level-3><!-- Begin SUB-MENU-LEVEL 3 -->
                    <div class="sub-title">
                      <div class="container-body">
                        <h5 class="sub-module-title">Settings</h5>
                      </div>
                    </div>

                    <div class="main-mid-menu">
                      <div class="menu-list">

                        <ul id="sub-menu-content">

                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')">
                            <a href="#">Unit Types<span class="arrow"></span></a>
                          </li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'activity-type-page')">
                            <a href="#">Activity Type<span class="arrow"></span></a>
                          </li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'task-type-page')">
                            <a href="#">Task Type<span class="arrow"></span></a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </sub-menu-level-3><!-- End SUB-MENU-LEVEL 3 -->



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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-2><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'general-settings-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'task-type-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Activity Types</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Activity Name <span class="required"></span></label>
                            <input type="text" name="activity_name" class="field-long" placeholder=" - Input Value -" />
                          </div>


                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Activity Description<span class="required"></span></label>
                            <textarea wrap="off" name="activity_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab31" class="" onclick="tab_7('tab31')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab32" class="" onclick="tab_7('tab32')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab33" class="" onclick="tab_7('tab33')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab34" class="" onclick="tab_7('tab34')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab35" class="active" onclick="tab_7('tab35')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab31" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab32" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab19" class="active" onclick="sub_tab7('mini_tab19')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab20" onclick="sub_tab7('mini_tab20')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab21" onclick="sub_tab7('mini_tab21')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab19">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab20" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab21" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab33" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab34" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab35">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </activity-type-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End ACTIVITY TYPES PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //                END ACTIVITY TYPE PAGE             //
              //                                                   //
            -- ==================================================== -->





        <!-- =================================================== --
              //                                                     //
              //                 BEGIN TASK-TYPE-PAGE                //
              //                                                     //
            -- ==================================================== -->


        <div id="task-type-page" class="pagesets_section" style="display: none;"><!--======Start TASK TYPE PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <credit-card-details-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="specific_module" onclick="#"><a href="#">General Settings</a></li>
                    <li class="active"><a href="#">Task Types</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-2><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">General Settings</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Task Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interf<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->



                  <sub-menu-level-3><!-- Begin SUB-MENU-LEVEL 3 -->
                    <div class="sub-title">
                      <div class="container-body">
                        <h5 class="sub-module-title">Settings</h5>
                      </div>
                    </div>

                    <div class="main-mid-menu">
                      <div class="menu-list">

                        <ul id="sub-menu-content">

                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')">
                            <a href="#">Unit Types<span class="arrow"></span></a>
                          </li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'activity-type-page')">
                            <a href="#">Activity Type<span class="arrow"></span></a>
                          </li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'task-type-page')">
                            <a href="#">Task Type<span class="arrow"></span></a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </sub-menu-level-3><!-- End SUB-MENU-LEVEL 3 -->



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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-2><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'activity-type-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'bookmarks-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Task Types</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">

                          <div class="data-input">
                            <label>Task Name<span class="required"></span></label>
                            <input type="text" name="task_name" class="field-long" placeholder="- Input Value -" />
                          </div>


                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Task Description<span class="required"></span></label>
                            <textarea wrap="off" name="task_description" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>

                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab36" class="" onclick="tab_8('tab36')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab37" class="" onclick="tab_8('tab37')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab38" class="" onclick="tab_8('tab38')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab39" class="" onclick="tab_8('tab39')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab40" class="active" onclick="tab_8('tab40')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab36" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab37" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab22" class="active" onclick="sub_tab8('mini_tab22')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab23" onclick="sub_tab8('mini_tab23')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab24" onclick="sub_tab8('mini_tab24')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab22">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab23" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab24" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab38" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab39" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab40">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



              </task-type-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End TASK TYPE PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //                 END TASK TYPE PAGE                //
              //                                                   //
            -- ==================================================== -->






        <!-- =================================================== --
              //                                                     //
              //                BEGIN BOOKMARKS PAGE                 //
              //                                                     //
            -- ==================================================== -->


        <div id="bookmarks-page" class="pagesets_section" style="display: none;"><!--======Start BOOKMARKS PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <bookmarks-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Bookmarks</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Bookmarks</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Bookmark</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-bookmark">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Bookmark Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interf<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->



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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'task-type-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'favorites-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Bookmarks</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Folder<span class="required"></span></label>
                            <input type="text" name="folder" class="field-long" placeholder=" - Input Value -" />
                          </div>


                          <div class="data-input">
                            <label>Bookmark Url<span class="required"></span></label>
                            <input type="text" name="suffix" class="field-long" placeholder=" - http:// -" />
                          </div>


                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Bookmark Namer<span class="required"></span></label>
                            <input type="text" name="bookmark_name" class="field-long" placeholder=" - Input Value -" />
                          </div>


                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab41" class="" onclick="tab_9('tab41')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab42" class="" onclick="tab_9('tab42')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab43" class="" onclick="tab_9('tab43')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab44" class="" onclick="tab_9('tab44')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab45" class="active" onclick="tab_9('tab45')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab41" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab42" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab25" class="active" onclick="sub_tab9('mini_tab25')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab26" onclick="sub_tab9('mini_tab26')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab27" onclick="sub_tab9('mini_tab27')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab25">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab26" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab27" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab43" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab44" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab45">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </bookmarks-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End BOOKMARKS PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //                 END BOOKMARKS PAGE                //
              //                                                   //
            -- ==================================================== -->




        <!-- =================================================== --
              //                                                     //
              //                    BEGIN FAVORITES PAGE             //
              //                                                     //
            -- ==================================================== -->


        <div id="favorites-page" class="pagesets_section" style="display: none;"><!--======Start NETWORK PROFILE PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <favorites-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">Settings</a></li>
                    <li class="specific_module" onclick="#"><a href="#">DB Admin</a></li>
                    <li class="active"><a href="#">Bookmarks</a></li>
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
                <div align="center"><span class="module-name">Settings</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Favorites</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Favorites</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-favorite">&nbsp;</i></span><span class="normal-font important energicos-darkgrey">Favorite Name</span></li>
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'tag-manager-page')"><a href="#">Tag Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'group-manager-page')"><a href="#">Group Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'role-manager-page')"><a href="#">Role Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'status-manager-page')"><a href="#">Status Manager<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'communication-interfaces-page')"><a href="#">Communication Interf<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'general-settings-page')"><a href="#">General Settings<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'bookmarks-page')"><a href="#">Bookmarks<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'favorites-page')"><a href="#">Favorites<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->



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

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'database-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'bookmarks-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="#"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Favorites</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Folder<span class="required"></span></label>
                            <input type="text" name="folder" class="field-long" placeholder=" - Input Value -" />
                          </div>


                          <div class="data-input">
                            <label>Favorite Url<span class="required"></span></label>
                            <input type="text" name="favorite_url" class="field-long" placeholder=" - Http:// -" />
                          </div>

                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Favorite Name<span class="required"></span></label>
                            <input type="text" name="favorite_name" class="field-long" placeholder=" - Input Value -" />
                          </div>


                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab46" class="" onclick="tab_10('tab46')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab47" class="" onclick="tab_10('tab47')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab48" class="" onclick="tab_10('tab48')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab49" class="" onclick="tab_10('tab49')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab50" class="active" onclick="tab_10('tab50')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab46" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab47" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab28" class="active" onclick="sub_tab10('mini_tab28')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab29" onclick="sub_tab10('mini_tab29')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab30" onclick="sub_tab10('mini_tab30')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab28">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab29" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab30" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab48" style="display: none;">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab49" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab50">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </favorites-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End FAVORITES PAGE======-->


        <!-- =================================================== --
              //                                                   //
              //                 END FAVORITES PAGE                //
              //                                                   //
            -- ==================================================== -->






        <!-- =================================================== --
              //                                                     //
              //              BEGIN DIGITAL IDENTITY PAGE            //
              //                                                     //
            -- ==================================================== -->


        <div id="digital-identity-page" class="pagesets_section" style="display: none;"><!--======Start DIGITAL IDENTITY PAGE ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <digital-identity-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module"><a href="#">CRM</a></li>
                    <li class="specific_module" onclick="#"><a href="#">Contact Manager</a></li>
                    <li class="active"><a href="#">Digital Identity Management (DIM)</a></li>
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
                <div align="center"><span class="module-name">Contact Manager</span></div>
              </module-identity-title><!-- End MODULE TITLE -->



              <pane-small-first><!-- Begin PANE-SMALL-FIRST -->

                <dataset-short-info-1><!-- Begin DATASET-SHORT-INFO-1 -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important capitalize">Digital Identity Management (DIM)</span>
                    </div>
                  </short-info-title><!-- End Title -->

                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Mr Alexander Puschkin</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-mail2">&nbsp;</i></span><span class="contact-email">kasa@gmail.com</span></li>
                        <li><span class="energicos-green"><i class="icon icon-phone">&nbsp;</i></span><span class="phone-no">+49 30 52 00522125</span></li>
                        <li>
                          <!--Start Rating -->
                          <div class="rating">
                            <ul>
                              <li><a href="#"><i class="icon energicos-red icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                            </ul>
                          </div>
                          <!--End Rating -->
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

                  <menu-level-3><!--Start MENU LEVEL 3 -->
                    <div class="main-mid-menu"><!--Start Mid menu -->
                      <div class="menu-list">

                        <ul id="mid-menu-content" class="menu-content collapse out">

                          <li class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><a href="#">Basic Profile<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'personal-profile-page')"><a href="#">Personal Profile<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'business-profile-page')"><a href="#">Business Profile<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'contact-profile-page')"><a href="#">Contact Profile<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'financial-profile-page')"><a href="#">Financial Profile<span class="arrow"></span></a></li>
                          <li class="specific_module" onclick="pagesetFunction(event, 'network-profile-page')"><a href="#">Network Profile<span class="arrow"></span></a></li>
                          <li class="active specific_module" onclick="pagesetFunction(event, 'digital-identity-page')"><a href="#">Digital Identity Management (DIM)<span class="arrow"></span></a></li>

                        </ul>
                      </div>
                    </div><!--End mid Menu -->
                  </menu-level-3><!--End MENU LEVEL 3  -->


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

                            <li class="specific_module" onclick="pagesetFunction(event, 'contact-mgr-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'contact-mgr-summary')">
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


                </dataset-short-info-1><!-- End DATASET-SHORT-INFO-1 -->

              </pane-small-first><!-- END PANE-SMALL-FIRST -->




              <pane-large><!-- Begin PANE-LARGE -->

                <mid-pane>
                  <mid-upper-pane-area>
                    <div class="upper-pane-header">
                      <mid-pane-tools>
                        <page-prv>
                          <div class="previous-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'network-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                          </div>
                        </page-prv>
                        <quick-tools>
                          <ul>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                            <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                          </ul>
                        </quick-tools>
                        <page-nxt>
                          <div class="next-arrow">
                            <a href="#" onclick="pagesetFunction(event, 'contact-mgr-summary')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                          </div>
                        </page-nxt>
                      </mid-pane-tools>
                    </div>
                  </mid-upper-pane-area>

                  <mid-pane-key-title>
                    <div class="container-body">
                      <span class="capitalize most-important energicos-red">Digital Identity</span>
                    </div>
                  </mid-pane-key-title>

                  <mid-pane-title-line></mid-pane-title-line>


                  <mid-content><!--Start Mid Content -->
                    <div class="container-body">


                      <form class="form-style-1 form-sitewide" method="post" action="#"><!-- Begin Form -->
                        <div class="form-part-1">


                          <div class="data-input">
                            <label>Contact ID<span class="required"></span></label>
                            <input type="financial" name="contact_id" class="field-long field-autofill" placeholder=" - Autofill -" />
                          </div>

                          <div class="data-input">
                            <label>Role<span class="required"></span></label>
                            <select name="role" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Operational Status<span class="required"></span></label>
                            <select name="operational_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Security Status<span class="required"></span></label>
                            <select name="security_status" class="field-select">
                              <option value=""> - Select Value - </option>
                              <option value="">Value 1</option>
                              <option value="">Value 2</option>
                            </select>
                          </div>

                          <div class="data-input">
                            <label>Comment<span class="required"></span></label>
                            <textarea wrap="off" name="comment" class="field-textarea" cols="40" rows="5" placeholder=" - Text -"></textarea>
                          </div>


                        </div>

                        <div class="form-part-2">

                          <div class="data-input">
                            <label>Username / Log in Name<span class="required"></span></label>
                            <input type="text" name="username" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>Passphrase<span class="required"></span></label>
                            <input type="text" name="passphrase" class="field-long" placeholder=" - Input Value -" />
                          </div>

                          <div class="data-input">
                            <label>File Upload</label>
                            <div class="form-upload">
                              <input type="file" name="" class="file-area" multiple>
                              <p><i class="icon energicos-red file-upload-icon icon-upload"></i><br/>
                                Drag files here to upload
                              </p>
                            </div>
                          </div>

                          <div class="data-input">
                            <div class="profile-pic-area">
                              <div class="profile-img2"><i class="icon energicos-red icon-avatar"></i></div>
                              <a class="update-profile-btn"><i class="icon icon-edit2"></i></a>
                            </div>
                          </div>


                        </div>
                      </form><!-- End Form -->


                    </div>
                  </mid-content><!--End Mid Content -->



                  <applied-tags><!--Start Applied Tags -->
                    <div class="container-body">
                      <div class="tags-line"></div>
                      <div class="group-tags-section">
                        <span class="mid-pane-font">Group Tags Applied&nbsp;&nbsp;<i class="icon icon-arrow-down"></i></span>
                        <ul class="group-tags">
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 1</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 2</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 3</a></li>
                          <li><a href="#" class="btn btn-orange" onclick="location.href='#'">Group 4</a></li>
                        </ul>
                      </div>

                    </div>
                  </applied-tags><!--End Applied Tags -->

                </mid-pane>

              </pane-large><!-- End PANE-LARGE -->




              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <mini-panels><!-- Begin MINI-PANELS -->
                  <pane-header>
                    <div class="upper-pane-header">
                      <!--Start tabs -->
                      <div class="pane-tabs">
                        <button id="li_tab51" class="" onclick="tab_11('tab51')"><a><i class="icon icon-clock"></i></a></button>
                        <button id="li_tab52" class="" onclick="tab_11('tab52')"><a><i class="icon icon-activity"></i></a></button>
                        <button id="li_tab53" class="active" onclick="tab_11('tab53')"><i class="icon icon-comment"></i></button>
                        <button id="li_tab54" class="" onclick="tab_11('tab54')"><i class="icon icon-folder"></i></button>
                        <button id="li_tab55" class="" onclick="tab_11('tab55')"><i class="icon icon-instance"></i></button>
                      </div>
                      <!--End tabs -->
                    </div>
                  </pane-header>

                  <search-filter-section><!--Begin SEARCH AREA -->
                    <div class="container-body">
                      <mini-search-area>

                        <filter-key>
                          <a href="#"><i class="icon symbol-nav-section icon-filter"></i></a>
                        </filter-key>

                        <search-box-input>
                          <form class="search-box specific_module" method="get" action="#">
                            <span class="searching-icon"><i class="icon icon-search"></i></span>
                            <input placeholder="Search something ..." class="main-search-text" id="mySearch" >
                          </form>

                        </search-box-input>

                        <sorting-key>
                          <a href="#"><i class="icon symbol-nav-section icon-sorting"></i></a>
                        </sorting-key>

                        <reset-key>
                          <a onclick="document.getElementById('mySearch').value = ''"><i class="icon symbol-nav-section icon-reset"></i></a>
                        </reset-key>

                      </mini-search-area>
                    </div>
                  </search-filter-section><!--End SEARCH AREA -->

                  <pane-content>



                    <!-- Begin ACTIVITY LOG TABBED CONTENT-->

                    <div id="tab51" style="display: none;"><!--Begin ACTIVITY LOG-->
                      <div class="activity-log-panel"><!--Start Activity log panel -->

                        <div class="energicos-timeline" id="scroll">
                          <div class="container-body">

                            <!-- Start Activity Log Panel 1 -->
                            <div class="timeline-center-line"></div>

                            <!-- Start Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 1</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 1-->

                            <!-- Start Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-grey-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 2</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 2-->

                            <!-- Start Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 3</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 3-->

                            <!-- Start Timeline 4 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div>
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">Log Entry 4</span>

                                      <ul>
                                        <li><span class="kind most-important">Kind : File Report</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">important</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End Timeline 4-->

                            <!-- End Activity Log Panel 1 -->

                          </div>
                        </div>

                      </div><!--End Activity log Panel -->

                    </div><!--End ACTIVITY LOG-->


                    <div id="tab52" style="display: none;">
                      <div class="task-panel"><!--Start Task Panel -->
                        <task-panel>

                          <task-panel-nav>
                            <!-- Start breadcrumbs -->
                            <div class="section-breadcrumbs">
                              <ul class="breadcrumb-task">
                                <li id="li_mini_tab31" class="active" onclick="sub_tab11('mini_tab31')"><a href="#">Overdue</a></li>
                                <li id="li_mini_tab32" onclick="sub_tab11('mini_tab32')"><a href="#">Flagged</a></li>
                                <li id="li_mini_tab33" onclick="sub_tab11('mini_tab33')"><a href="#">Due this Week</a></li>
                              </ul>
                            </div>
                            <!-- End breadcrumbs -->
                          </task-panel-nav>

                          <task-panel-content><!-- Begin Task Panel Content -->

                            <div id="mini_tab31">
                              <div class="overdue-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->

                                    <task-outlook><!-- Begin Task 5 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 5 -->

                                    <task-outlook><!-- Begin Task 6 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 6 -->

                                    <task-outlook><!-- Begin Task 7 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 7 -->

                                    <task-outlook><!-- Begin Task 8 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 8 -->

                                    <task-outlook><!-- Begin Task 9 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 9 -->

                                    <task-outlook><!-- Begin Task 10 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 10 -->

                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab32" style="display: none;" >
                              <div class="flagged-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->

                                    <task-outlook><!-- Begin Task 4 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 4 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                            <div id="mini_tab33" style="display: none;">
                              <div id="due-area">
                                <div class="task" id="scroll">
                                  <div class="container-body">

                                    <task-outlook><!-- Begin Task 1 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 1 -->

                                    <task-outlook><!-- Begin Task 2 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 2 -->

                                    <task-outlook><!-- Begin Task 3 -->
                                      <task-name>
                                        <div class="container-body">
                                          <span class="most-important energicos-dark">Task A</span>
                                        </div>
                                      </task-name>
                                      <task-date>
                                        27.05.2017
                                      </task-date>
                                      <task-tag>
                                        <div class="container-body">
                                          <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                        </div>
                                      </task-tag>
                                    </task-outlook><!-- End Task 3 -->
                                  </div>
                                </div>
                              </div>
                            </div>


                          </task-panel-content><!-- End Task Panel Content -->

                        </task-panel>
                      </div><!--End Task Panel -->
                    </div>


                    <div id="tab53">
                      <div class="comment-panel"><!-- Begin Comment Panel -->
                        <div class="comments" id="scroll">
                          <div class="container-body">

                            <!-- Start comment 1 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 1 -->

                            <!-- Start comment 2 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 2 -->

                            <!-- Start comment 3 -->
                            <div class="comment-area">
                              <div class="comment-header-area">
                                <div class="comment-date">
                                  <i class="icon energicos-red icon-calendar"></i><span class="date">27.05.2017</span>
                                </div>

                                <div class="comment-header-divider"></div>

                                <div class="comment-title">
                                  <span class="note-title">Note Title</span>
                                </div>

                                <div class="comment-functions">
                                  <ul>
                                    <li><a href="#"><i class="icon icon-margin icon-reply"></i></a></li>
                                    <li><a href="#"><i class="icon icon-margin icon-star"></i></a></li>
                                    <li><a href="#"><i class="icon icon-more"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                              <div class="comment-content">
                                <div class="comment-section-1">
                                  <div class="container-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
                                  </div>

                                </div>

                                <div class="comment-section-2">
                                </div>

                                <div class="comment-section-3">
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 3</a>
                                </div>

                              </div>
                            </div>
                            <!-- End Comment 3 -->

                          </div>
                        </div>
                      </div><!-- End Comment Panel -->
                    </div>

                    <div id="tab54" style="display: none;">
                      <div class="file-panel"><!--Start File Panel -->
                        <div class="file-panel-timeline" id="scroll">
                          <div class="container-body">

                            <div class="timeline-center-line"></div>

                            <!-- Start File Panel Timeline 1 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 1 -->

                            <!-- Start File Panel Timeline 2 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 2 -->


                            <!-- Start File Panel Timeline 3 -->
                            <div class="timeline-core">
                              <div class="meta-dot dot energicos-orange-dot"></div> <!-- orange circular bullet -->
                              <div class="timeline-info">
                                <div class="timeline-content-right">
                                  <div class="timeline-section-1">

                                    <div class="timeline-components">
                                      <span class="most-important energicos-red entry">File Name</span>

                                      <ul>
                                        <li><span class="kind most-important">Stored by : John Doe</span></li>
                                        <li><span class="kind most-important">Size : 106 Kb</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-calendar"></i>&nbsp;</span><span class="date">27.05.2017</span></li>
                                        <li><span class="energicos-red"><i class="icon icon-clock"></i>&nbsp;</span><span class="time-ago">2 Days ago</span></li>
                                      </ul>
                                    </div>

                                  </div>

                                  <div class="timeline-section-2"></div>

                                  <div class="timeline-section-3">
                                    <div class="energicos-red timeline-important"><span class="important">Tags</span></div>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 1</a>
                                    <a href="#" class="btn btn-blue" onclick="location.href='#'">Tag 2</a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- End File Panel Timeline 3 -->

                          </div>
                        </div>
                      </div><!--End File Panel -->
                    </div>

                    <div id="tab55" style="display: none;">
                      <div class="instance-panel"><!--Start instance Panel -->

                        <div class="instance" id="scroll">

                          <div class="container-body">
                            <table class="pure-table pure-table-bordered" id="example">
                              <thead>
                              <tr>
                                <th>Reason</th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                                <th>Header<i class="icon order-2 icon-up-down-arrow"></i></th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 1 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 1 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 2 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 2 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 3 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 3 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 4 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 4 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 5 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 5 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 6 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 6 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 7 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 7 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 8 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 8 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 9 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 9 -->

                              <tr onclick="pagesetFunction(event, '#')" style="cursor:hand"><!-- Begin row 10 -->
                                <td class="table-text">#10</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                                <td class="table-text">text</td>
                              </tr><!--End row 10 -->


                              </tbody>
                            </table>

                          </div>

                        </div>


                      </div><!--End instance Panel -->
                    </div>


                    <!-- End FILE INSTANCE CONTENT -->


                  </pane-content>

                </mini-panels><!-- End MINI-PANELS -->

              </pane-small-last><!-- End PANE-SMALL-LAST -->



            </digital-identity-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End DIGITAL IDENTITY PAGE======-->


        <!-- =================================================== --
              //                                                    //
              //           END DIGITAL IDENTITY PAGE                //
              //                                                    //
            -- ==================================================== -->






        <!-- =================================== --
              //                                    //
              //     BEGIN CONTACT SUMMARY PAGE     //
              //                                    //
            -- ==================================== -->


        <div id="contact-mgr-summary" class="pagesets_section" style="display: none;"><!--======Start CONTACT SUMMARY ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <contact-summary-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module" onclick="pagesetFunction(event, 'crm-page')"><a href="crm/crm.html">CRM</a></li>
                    <li class="specific_module" onclick="#"><a href="#">Contact Manager</a></li>
                    <li class="active"><a href="#">Summary</a></li>
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
                <div align="center"><span class="module-name">Contact Manager</span></div>
              </module-identity-title><!-- End MODULE TITLE -->

              <pane-large><!-- Begin PANE-LARGE -->

                <div class="upper-pane-header">
                  <div class="container-body">
                    <large-pane-tools>
                      <page-prv>
                        <div class="previous-arrow">
                          <a href="#" onclick="pagesetFunction(event, 'digital-identity-page')"><i class="icon symbol-pagination-dark icon-arrow-left"></i></a>
                        </div>
                      </page-prv>
                      <page-title>
                        <span class="energicos-red most-important capitalize">Summary</span>
                      </page-title>
                      <quick-tools>
                        <ul>
                          <li><a href="#"><i class="icon symbol-pagination-dark icon-cancel"></i></a></li>
                          <li><a href="#"><i class="icon symbol-pagination-dark icon-check"></i></a></li>
                        </ul>
                      </quick-tools>
                      <page-nxt>
                        <div class="next-arrow">
                          <a href="#" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                        </div>
                      </page-nxt>
                    </large-pane-tools>
                  </div>

                </div>

                <div class="summary" id="scroll">

                  <summary-form>
                    <summary-sub-header>
                      <div class="container-summary">
                        <span class="energicos-dark capitalize most-important">Basic Profile</span>
                      </div>
                    </summary-sub-header>
                  </summary-form>

                  <summary-fields>
                    <summary-field-1>
                      <div class="container-summary-content">
                        <label>Title</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-1>
                    <summary-field-2>
                      <div class="container-summary-content">
                        <label>Additional Title</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-2>
                    <summary-field-3>
                      <div class="container-summary-content">
                        <label>First Name</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-3>
                    <summary-field-4>
                      <div class="container-summary-content">
                        <label>Middle Name</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-4>
                    <summary-field-5>
                      <div class="container-summary-content">
                        <label>Last Name</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-5>
                    <summary-field-6>
                      <div class="container-summary-content">
                        <label>Operational Status</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-6>
                    <summary-field-7>
                      <div class="container-summary-content">
                        <label>Security Status</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-7>
                    <summary-field-8>
                      <div class="container-summary-content">
                        <label>Comment</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-8>
                    <summary-field-9>
                      <div class="container-summary-content">
                        <label>File</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-9>
                  </summary-fields>

                  <summary-form>
                    <summary-sub-header>
                      <div class="container-summary">
                        <span class="energicos-dark capitalize most-important">Personal Profile</span>
                      </div>
                    </summary-sub-header>
                  </summary-form>

                  <summary-fields>
                    <summary-field-1>
                      <div class="container-summary-content">
                        <label>Birthday</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-1>
                    <summary-field-2>
                      <div class="container-summary-content">
                        <label>Gender</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-2>
                    <summary-field-3>
                      <div class="container-summary-content">
                        <label>Marital Status</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-3>
                    <summary-field-4>
                      <div class="container-summary-content">
                        <label>Religion</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-4>
                    <summary-field-5>
                      <div class="container-summary-content">
                        <label>Political Orientation</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-5>
                    <summary-field-6>
                      <div class="container-summary-content">
                        <label>Hobby</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-6>
                    <summary-field-7>
                      <div class="container-summary-content">
                        <label>Comment</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-7>
                  </summary-fields>

                  <summary-form>
                    <summary-sub-header>
                      <div class="container-summary">
                        <span class="energicos-dark capitalize most-important">Business Profile</span>
                      </div>
                    </summary-sub-header>
                  </summary-form>

                  <summary-fields-6sections>
                    <summary-field-1>
                      <div class="container-summary-content">
                        <label>Member of Organization since</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-1>
                    <summary-field-2>
                      <div class="container-summary-content">
                        <label>Member of Organization till</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-2>
                    <summary-field-3>
                      <div class="container-summary-content">
                        <label>Name of the Organization</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-3>
                    <summary-field-4>
                      <div class="container-summary-content">
                        <label>Function in Organization</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-4>
                    <summary-field-5>
                      <div class="container-summary-content">
                        <label>Superior</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-5>
                    <summary-field-6>
                      <div class="container-summary-content">
                        <label>Comment</label>
                        <div class="data-placeholder">Data</div>
                        <div class="label-underline"></div>
                      </div>
                    </summary-field-6>
                  </summary-fields-6sections>

                </div>



              </pane-large><!-- End PANE-LARGE -->

              <pane-small-last><!-- Begin PANE-SMALL-LAST -->

                <dataset-short-info><!-- Begin DATASET-SHORT-INFO -->

                  <short-info-title><!-- Start Title -->
                    <div class="container-body">
                      <span class="energicos-red most-important">Contact</span>
                    </div>
                  </short-info-title><!-- End Title -->
                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Mr Alexander Puschkin</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-mail2">&nbsp;</i></span><span class="contact-email">kasa@gmail.com</span></li>
                        <li><span class="energicos-green"><i class="icon icon-phone">&nbsp;</i></span><span class="phone-no">+49 30 52 00522125</span></li>
                        <li>
                          <!--Start Rating -->
                          <div class="rating">
                            <ul>
                              <li><a href="#"><i class="icon energicos-red icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                            </ul>
                          </div>
                          <!--End Rating -->
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

                            <li class="specific_module" onclick="pagesetFunction(event, 'contact-mgr-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="active specific_module" onclick="pagesetFunction(event, 'contact-mgr-summary')">
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
            </contact-summary-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End CONTACT SUMMARY======-->


        <!-- =================================== --
              //                                    //
              //      END CONTACT SUMMARY PAGE      //
              //                                    //
            -- ==================================== -->







        <!-- ======================================== --
              //                                          //
              //        BEGIN CONTACT OVERVIEW PAGE       //
              //                                          //
            -- ========================================== -->


        <div id="contact-mgr-overview" class="pagesets_section" style="display: none;"><!--======Start CONTACT OVERVIEW ======-->


          <nav-level-2-tab-content><!-- BEGIN MAIN CONTENT -->

            <contact-overview-page>
              <breadcrumbs><!-- Begin Breadcumbs -->
                <!-- Start breadcrumbs -->
                <div class="section-breadcrumbs">
                  <ul class="breadcrumb">
                    <li><i class="icon icon-arrow-left"></i></li>
                    <li class="specific_module" onclick="pagesetFunction(event, 'crm-page')"><a href="crm/crm.html">CRM</a></li>
                    <li class="specific_module" onclick="#"><a href="#">Contact Manager</a></li>
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
                <div align="center"><span class="module-name">Contact Manager</span></div>
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


                    <div class="paginated-links"><!-- Start pagination -->
                      <div class="container-body">
                        <ul class="pagination">
                          <li><a href="#"><i class="icon icon-arrow-left"></i></a></li>
                          <li><a class="active" href="#">1</a></li>
                          <li class="pagination-of">of</li>
                          <li><a href="#">12</a></li>
                          <li><a href="#"><i class="icon icon-arrow-right"></i></a></li>
                        </ul>
                      </div>
                    </div><!-- End Pagination -->


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
                          <tr onclick="#"><!-- Begin row 1 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 1 -->

                          <tr onclick="#"><!-- Begin row 2 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 2 -->

                          <tr onclick="#"><!-- Begin row 3 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 3 -->

                          <tr onclick="#"><!-- Begin row 4 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 4 -->

                          <tr onclick="#"><!-- Begin row 5 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 5 -->

                          <tr onclick="#"><!-- Begin row 6 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 6 -->

                          <tr onclick="#"><!-- Begin row 7 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 7 -->

                          <tr onclick="#"><!-- Begin row 8 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 8 -->

                          <tr onclick="#"><!-- Begin row 9 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
                              </div>
                            </td>
                          </tr><!--End row 9 -->

                          <tr onclick="#"><!-- Begin row 10 -->
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
                                <a class="specific_module" onclick="pagesetFunction(event, 'basic-profile-page')"><i class="icon symbol-pagination-dark icon-arrow-right"></i></a>
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
                      <span class="energicos-red most-important">Contact</span>
                    </div>
                  </short-info-title><!-- End Title -->
                  <short-info-col-1>
                    <div class="container-body">
                      <ul class="contacts">
                        <li><span class="most-important energicos-dark contact-person">Mr Alexander Puschkin</span></li>
                        <li><span class="energicos-blue"><i class="icon icon-mail2">&nbsp;</i></span><span class="contact-email">kasa@gmail.com</span></li>
                        <li><span class="energicos-green"><i class="icon icon-phone">&nbsp;</i></span><span class="phone-no">+49 30 52 00522125</span></li>
                        <li>
                          <!--Start Rating -->
                          <div class="rating">
                            <ul>
                              <li><a href="#"><i class="icon energicos-red icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                              <li><a href="#"><i class="icon rating-default icon-star"></i></a></li>
                            </ul>
                          </div>
                          <!--End Rating -->
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

                            <li class="active specific_module" onclick="pagesetFunction(event, 'contact-mgr-overview')">
                              <a href="#"><i class="icon energicos-red icon-side-nav icon-overview"></i>
                                Overview <span class="arrow"></span>
                              </a>
                            </li>

                            <li class="specific_module" onclick="pagesetFunction(event, 'contact-mgr-summary')">
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
            </contact-overview-page>

          </nav-level-2-tab-content><!-- END MAIN CONTENT -->


        </div><!--======End CONTACT OVERVIEW======-->


        <!-- ======================================== --
              //                                          //
              //         END CONTACT OVERVIEW PAGE        //
              //                                          //
            -- ========================================== -->


      </div><!--======End CONTACT MANAGER TAB ======-->



    </main-content><!-- END MAIN CONTENT -->
  </section>

</template>

<script>
  export default {
  }
</script>

<style>

</style>
