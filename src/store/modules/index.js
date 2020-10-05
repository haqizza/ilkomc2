/* eslint-disable no-console */
const state = () => ({
  idQuiz: "4062020",
  idSiswa: "S34",
  namaSiswa: "Fulan",
  currentScreen: "Start",
  currentNomorSoal: 0,
  mataPelajaran: "Bahasa",
  listQuiz: {
    4062020: {
      soal: [
        "Apa jawabannya?",
        "Mengapa begini?",
        "Sebutkan buah vit-C #1!",
        "Kertas adalah sampah?"
      ],
      jawaban: {
        0: {
          type: "PG",
          text: ["Tidak tahu", "Belum tahu", "Tidak mau tahu", "Bebas"]
        },
        1: {
          type: "Isian"
        },
        2: {
          type: "Isian"
        },
        3: {
          type: "PG",
          text: ["Bersih", "Organik", "Non-Organik", "Semi-Non-Organik"]
        }
      },
      kunciJawaban: {
        1: ["tidak tahu", "tidak tahu", "jambu", "Non-Organik"]
      }
    }
  },
  jawaban: ["A", "Beda"],
  statusIsi: [true, true],
  hasil: [true, false],
  nilai: 0,
  waktu: "20-07-2020"
});

const getters = {
  getIdQuiz: state => state.idQuiz,
  getNamaSiswa: state => state.namaSiswa,
  getMataPelajaran: state => state.mataPelajaran,
  getCurrentScreen: state => state.currentScreen,
  getCurrentNomorSoal: state => state.currentNomorSoal,
  getAllSoal: state => state.listQuiz[state.idQuiz].soal,
  getSoal: state => state.listQuiz[state.idQuiz].soal[state.currentNomorSoal],
  getTypeJawaban: state => state.listQuiz[state.idQuiz].jawaban[state.currentNomorSoal].type,
  getJawaban: state => state.listQuiz[state.idQuiz].jawaban[state.currentNomorSoal].text,
  getStatusIsi: state => state.statusIsi,
  getNilai: state => state.nilai,
  getHasil: state => state.hasil,
  getWaktu: state => state.waktu
};

const actions = {
  compareJawaban() {
    //membandingkan jawaban dengan kunciJawaban
    //Kemudian disimpan di hasil, berbentuk boolean
  },
  hitungNilai() {
    //Menghitung jumlah yang benar di hasil,
    //dibagi skala/jumlah soal
  },
  simpanJawaban({ commit }, input) {
    commit("SET_JAWABAN", input);
    // Menyimpan jawaban dalam array jawaban
  }
  // nextNomorSoal({ commit }, currentNomorSoal) {
  //   commit("SET_NEXT_NOMOR_SOAL", currentNomorSoal);
  // },
  // backNomorSoal({ commit }, currentNomorSoal) {
  //   commit("SET_BACK_NOMOR_SOAL", currentNomorSoal);
  // }
};

const mutations = {
  SET_NAMA_SISWA: (state, namaSiswa) => (state.namaSiswa = namaSiswa),
  SET_JAWABAN: (state, jawaban) => {
    state.jawaban[state.currentNomorSoal] = jawaban;
  },
  SET_HASIL: (state, hasil) => (state.hasil = hasil),
  SET_NILAI: state => {
    state.nilai = state.hasil.filter(item => item == true).length; //Filter yang true, dihitung
  },
  SET_NEXT_SCREEN: state => {
    if (state.currentScreen == "Start") {
      state.currentScreen = "Main";
    } else if (state.currentScreen == "Main") {
      state.currentScreen = "Finish";
    }
    console.log(state.currentScreen);
  },
  SET_NEXT_NOMOR_SOAL: state => {
    state.currentNomorSoal = state.currentNomorSoal + 1;
    console.log("payload at next nomor soal", state.currentNomorSoal)
  },
  SET_BACK_NOMOR_SOAL: state => {
    state.currentNomorSoal = state.currentNomorSoal - 1;
    console.log("payload at back nomor soal", state.currentNomorSoal)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
