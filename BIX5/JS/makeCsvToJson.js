<script src="js/jquery.js"></script>
let csv_data = []
// csv 읽는 Ajax call
$(function () {
    let fileName = "C:/Users/roadtech/BIX5Sample/leh60245_BIX5/BIX5/Samples/Dashboard/Widgets/Chart/data/roadData.csv";
    $.ajax({
        url: fileName,
        dataType: "text",
        success: function (data) {
            let allRow = data.split("\n");
            for (let i = 14; i < allRow.length - 1; i++) {
                let column = allRow[i].split(",")
                csv_data.push({
                    dist: column[0], status_img: column[1], surf_img: column[2], pd: column[3], roughness: column[4], latlng: [column[5], column[6]],
                    amount_crack: column[7], ratio_crack: column[8], SPI_1: column[9], SPI_2: column[10], SPI_3: column[11], AP_L: [column[12], column[13], column[14]],
                    AP_T: [column[15], column[16], column[17]], AP_CJ: [column[18], column[19], column[20]], AP_AC: [column[21], column[22], column[23]],
                    AP_P: [column[24], column[25], column[26]], AP_H: [column[27], column[28], column[29]], note: column[30], w: column[31]
                })
            }   
        }
    });
});
