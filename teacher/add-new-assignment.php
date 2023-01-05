<?php
require_once "../MySQL.php";
session_start();
if (!isset($_SESSION["teacher"])) {
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">

<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon">
    <title>Sipway - All Assignments</title>
    <!-- Google font-->
    <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&amp;family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&amp;display=swap"
            rel="stylesheet">

    <!-- Fontawesome css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/font-awesome.css">

    <!-- Linear Icon css -->
    <link rel="stylesheet" href="../assets/css/linearicon.css">

    <!-- Themify icon css-->
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/themify.css">

    <!-- Feather icon css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/feather-icon.css">

    <!-- Plugins css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/scrollbar.css">
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/animate.css">

    <!-- Bootstrap css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/vendors/bootstrap.css">

    <!-- App css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/style.css">

    <!-- Responsive css -->
    <link rel="stylesheet" type="text/css" href="../assets/css/responsive.css">
</head>

<body>
<!-- tap on top start-->
<div class="tap-top">
    <span class="lnr lnr-chevron-up"></span>
</div>
<!-- tap on tap end-->

<!-- page-wrapper Start-->
<div class="page-wrapper compact-wrapper dark-sidebar" id="pageWrapper">
    <!-- Page Header Start-->
    <?php require "header.php" ?>
    <!-- Page Header Ends-->


    <!-- Page Body Start-->
    <div class="page-body-wrapper">

        <!-- Page Sidebar Start-->
        <?php require "sidebar.php" ?>
        <!-- Page Sidebar Ends-->

        <!-- Settings Section Start -->
        <div class="page-body">
            <div class="title-header">
                <h5>Add new assignment</h5>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-sm-12">
                                <!-- Details Start -->
                                <div class="card">
                                    <div class="card-body">
                                        <form id="add-new-assignment-form" class="theme-form theme-form-2 mega-form"
                                              onsubmit="addNewAssignment(event)">
                                            <div class="row">

                                                <div class="mb-4 row align-items-center">
                                                    <label class="form-label-title col-sm-2 mb-0">Assignment
                                                        Name</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control" type="text" name="assignment-name"
                                                               placeholder="Enter the Assignment Name">
                                                    </div>
                                                </div>

                                                <div class="mb-4 row align-items-center">
                                                    <label class="form-label-title col-sm-2 mb-0">Select Subject</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-select" name="subject">
                                                            <option value="0">Select Subject</option>
                                                            <?php
                                                            $teacherEmail = $_SESSION['teacher']['email'];
                                                            $thsRs = MySQL::search("SELECT *, teacher_has_subject.id AS ths_id FROM teacher_has_subject JOIN subject s on s.id = teacher_has_subject.subject_id WHERE teacher_email = '${teacherEmail}'");
                                                            while ($thsData = $thsRs->fetch_assoc()) {
                                                                ?>
                                                                <option value="<?= $thsData['subject_id'] ?>"><?= $thsData['subject_name'] ?></option>
                                                                <?php
                                                            }
                                                            ?>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="mb-2 row align-items-center">
                                                    <label class="form-label-title col-sm-2 mb-0">Start Date</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control mb-3" type="date" name="start-date"/>
                                                    </div>
                                                </div>

                                                <div class="mb-2 row align-items-center">
                                                    <label class="form-label-title col-sm-2 mb-0">End Date</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control mb-3" type="date" name="end-date"/>
                                                    </div>
                                                </div>

                                                <div class="mb-4 row align-items-center">
                                                    <label for="" class="form-label-title col-sm-2 mb-0">Batch</label>
                                                    <div class="col-sm-10 d-grid">
                                                        <select name="batch-name" id="batch-name">
                                                            <option value="0">Select Batch</option>
                                                            <?php

                                                            $batchRs = MySQL::search("SELECT * FROM batch");
                                                            while ($batch = $batchRs->fetch_assoc()) {
                                                                ?>
                                                                <option value="<?= $batch['id'] ?>"><?= $batch['batch_name']; ?></option>
                                                                <?php
                                                            }

                                                            ?>
                                                        </select>
                                                    </div>

                                                </div>

                                                <div class="mb-4 row align-items-center">
                                                    <label class="col-sm-2 col-form-label form-label-title">File
                                                        Uplaod</label>
                                                    <div class="col-sm-10">
                                                        <input class="form-control form-choose" type="file"
                                                               name="file-uploaded"
                                                               accept="application/pdf, application/msword, .doc, .docx"/>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" class="btn btn-primary">Add new assignment
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- Details End -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Settings Section End -->
    </div>
    <!-- Page Body End-->

    <div class="container-fluid">
        <!-- footer start-->
        <footer class="footer">
            <div class="row">
                <div class="col-md-12 footer-copyright text-center">
                    <p class="mb-0">Copyright 2021 © Sipway</p>
                </div>
            </div>
        </footer>
        <!-- footer end-->
    </div>
</div>
<!-- page-wrapper End-->


<!-- latest js -->
<script src="../assets/js/jquery-3.6.0.min.js"></script>

<!-- Bootstrap js -->
<script src="../assets/js/bootstrap/bootstrap.bundle.min.js"></script>
<script src="../assets/js/bootstrap/bootstrap.min.js"></script>

<!-- feather icon js -->
<script src="../assets/js/icons/feather-icon/feather.min.js"></script>
<script src="../assets/js/icons/feather-icon/feather-icon.js"></script>

<!-- scrollbar simplebar js -->
<script src="../assets/js/scrollbar/simplebar.js"></script>
<script src="../assets/js/scrollbar/custom.js"></script>

<!-- Sidebar js -->
<script src="../assets/js/config.js"></script>

<!-- Plugins JS -->
<script src="../assets/js/sidebar-menu.js"></script>
<script src="../assets/js/notify/index.js"></script>

<!-- all checkbox select js -->
<script src="../assets/js/checkbox-all-check.js"></script>

<!-- Theme js -->
<script src="../assets/js/script.js"></script>

<!-- Admin Js -->
<script src="../assets/js/teacher.js"></script
</body>

</html>