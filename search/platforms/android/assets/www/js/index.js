/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var store =
            [{ "id": 1, "description": "Website\nhttps:\/\/paytm.com\/\nUsername\n8754250572\nPassword\n$Mahendran24$\nEmail\ngkm8354321@gmail.com\t" }, { "id": 2, "description": "https:\/\/www.onlinesbi.com\/\ngkmahendran09\n$Parameswari24$\n835432\nProfile pass - $Sadhippom09$\n\nName    - G.K.Mahendran\nAcc. No - 31748965436\nBank    - State Bank of India\nBranch  - Chinnamanur\t\nIFSC    - SBIN0005145" }, { "id": 3, "description": "https:\/\/netbanking.hdfcbank.com\/netbanking\/\n56773191\n$Pandi24$\nmahendrankannan@yahoo.com\n8354\n\nName    - G.K.Mahendran\t\nAcc. No - 50100056476691\t\nBank    - HDFC Bank\t\nBranch  - Santhome\nIFSC    - HDFC0000386\n\n\nHdfc credit card\nvisa online\ngkmahendran09\nMahendran2" }, { "id": 4, "description": "https:\/\/icicibank.com\/\n549710111\n$Mahendran24$\nmahendrankannan@yahoo.com\n2334\n\nAccount No.\n000801624936\n\nIFSC\nICIC0000008" }, { "id": 5, "description": "https:\/\/www.centralbank.net.in\/\n8160342283\nPandi24$\ngkmahendran09\n2334\n18112334\ngkm8354321$\t\nMMID - 9016197" }, { "id": 6, "description": "Skype.com\ng.k.mahendran\n$Mahendran24$" }, { "id": 7, "description": "pluralsight.com\nmahendran.kannan003@outlook.com\nTest@123$" }, { "id": 8, "description": "Outlook.com\t\nmahendran.kannan001@outlook.com\tTest@123$\nmahendran.kannan002@outlook.com\tTest@123$\nmahendran.kannan003@outlook.com\t$Test@123$" }, { "id": 9, "description": "http:\/\/www.gmail.com\/\ngkm8354321@gmail.com\nPandiMahaDevan" }, { "id": 10, "description": "http:\/\/www.hotmail.com\/\ngkm09@hotmail.com\n$Parameswari24$" }, { "id": 11, "description": "http:\/\/www.rediff.com\/\ngkm09@rediff.com\nsadhippom09" }, { "id": 12, "description": "Mahendran@rigaps.com\n$Kavitha24$" }, { "id": 13, "description": "Apple ID\ngkm09@hotmail.com\n$Bharath24$" }, { "id": 14, "description": "https:\/\/www.hinote.in\/hrworks\/LoginValidate.do\nRIGAPS43\nRIG Enterprise\nTest@123$" }, { "id": 15, "description": "https:\/\/unifiedportal-mem.epfindia.gov.in\/memberinterface\/\n100904480943\nApawcp@*#687" }, { "id": 16, "description": "https:\/\/passbook.epfindia.gov.in\/MemberPassBook\/Login.jsp\n100904480943\nApawcp@*#687" }, { "id": 17, "description": "AADHAAR\nMAHENDRAN KANNAN\nKANNAN GURUSAMY\nUAN - 100904480943\nAAdHAAR - 561361929754" }, { "id": 18, "description": "PAN\nMAHENDRAN KANNAN\nKANNAN GURUSAMY\nDLDPK5032B" }, { "id": 19, "description": "6140600129\nKAVITHA K\nMADURAI MAIN\nINDIAN BANK\nIDIB000M004\n\nK.Kavitha\n00000032334538328\nBank    - State Bank of India\nBranch  - Chinnamanur\t\nIFSC    - SBIN0005145" }, { "id": 20, "description": "904492359\nM.PANDI MAHADEVAN\nIndian Bank\nIDIB000C133\nChinnamanur\nBranch Code - 00C133\nPhone - 04554 247347\t\n" }, { "id": 21, "description": "\nA\/c Name - G.Kannan\nA\/c No - 3153253820\nBank - Central Bank\nBranch - Seelayampatti\nIFSC - CBIN0282228\nBank Code - 282228\nPhone - 04554 247291\t2509\n\n\nA\/c Name - K.Balasubramani\nA\/c No - 17401000013871\nBank - Indian Overseas Bank\nBranch - Chinnamanur\nIFSC - IOBA0001560\nBank Code - 1560\nPhone - 04554 248900\t\n\n\nA\/c Name - V.T.Vishwanathan\nA\/c No - 138001000701712\nBank - City Union Bank\nBranch - Udumalpet\nIFSC - CIUB0000138\nBracnh code - 138\n\nA\/c Name -  V.Veerabadran\nAc\/ No - 1005100\nBank - Corporation Bank\nBrach - Bodipatti\nIFSC - CORP0000193\nBranch Code - 193\nMICR Code - 642017102\nPhone - 04252 223133\t" }, { "id": 22, "description": "https:\/\/expo.io\nEmail\ngkm09@hotmail.com\nUsername\ngkmahendran09\nPassword\nTest@123$" }];


        var searchBtn = document.getElementById('searchbtn');
        var searchBar = document.getElementById('searchbar');
        var list = document.getElementById('list');

        searchBtn.addEventListener('click', function () {

            list.innerHTML = ''

            var searchTxt = searchBar.value.toLowerCase();

            var filteredStore = store.filter(function (s) {
                return s.description.toLowerCase().indexOf(searchTxt) !== -1
            });

            var result = '';

            filteredStore.forEach(function (f) {
                result += '<div class="list-item">';
                result += f.description;
                result += '</div>';
            });


            list.innerHTML = result;


        });
    }
};

app.initialize();