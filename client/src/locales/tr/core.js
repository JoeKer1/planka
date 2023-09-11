import dateFns from 'date-fns/locale/tr';

export default {
  dateFns,

  format: {
    date: 'd.MM.yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd. MMM',
    longDateTime: "d. MMMM 'Saat' p",
  },

  translation: {
    common: {
      account: 'Hesap',
      actions: 'Eylemler',
      addAttachment_title: 'Dosya ekle',
      addComment: 'Yorum ekle',
      addManager_title: 'Yönetici ekle',
      addMember_title: 'Üye ekle',
      addUser_title: 'Kullanıcı ekle',
      administrator: 'Administrator',
      all: 'Tümü',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Bağlantı yeniden kurulduğunda tüm değişiklikler kaydedilecektir.',
      areYouSureYouWantToDeleteThisAttachment: 'Bu eki silmek istediğinize emin misiniz?',
      areYouSureYouWantToDeleteThisBoard: 'Bu panoyu silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisCard: 'Bu kartı silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisComment: 'Bu yorumu silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisLabel: 'Bu etiketi silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisList: 'Bu listeyi silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisProject: 'Bu projeyi silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisTask: 'Bu görevi silmek istediğinizden emin misiniz?',
      areYouSureYouWantToDeleteThisUser: 'Bu kullanıcıyı silmek istediğinizden emin misiniz?',
      areYouSureYouWantToLeaveBoard: 'Panodan ayrılmak istediğinizden emin misiniz?',
      areYouSureYouWantToLeaveProject: 'Projeden ayrılmak istediğinizden emin misiniz?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Bu yöneticiyi projeden çıkarmak istediğinizden emin misiniz?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Bu üyeyi panodan çıkarmak istediğinizden emin misiniz?',
      attachment: 'ek',
      attachments: 'ekler',
      authentication: 'kimlik doğrulama',
      background: 'arka plan',
      board: 'pano',
      boardNotFound_title: 'Pano bulunamadı',
      cardActions_title: 'Kart İşlemleri',
      cardNotFound_title: 'Kart bulunamadı',
      cardOrActionAreDeleted: 'Kart veya işlem silindi',
      color: 'renk',
      createBoard_title: 'Pano Oluştur',
      createLabel_title: 'Etiket Oluştur',
      createNewOneOrSelectExistingOne: 'Yeni bir tane oluşturun veya mevcut bir tanesini seçin.',
      createProject_title: 'Proje Oluştur',
      createTextFile_title: 'Metin Dosyası Oluştur',
      currentPassword: 'Geçerli şifre',
      dangerZone_title: 'Tehlikeli Bölge',
      date: 'tarih',
      dueDate_title: 'Termin Tarihi',
      deleteAttachment_title: 'Eki Sil',
      deleteBoard_title: 'Panoyu Sil',
      deleteCard_title: 'Kartı Sil',
      deleteComment_title: 'Yorumu Sil',
      deleteLabel_title: 'Etiketi Sil',
      deleteList_title: 'Listeyi Sil',
      deleteProject_title: 'Projeyi Sil',
      deleteTask_title: 'Görevi Sil',
      deleteUser_title: 'Kullanıcıyı Sil',
      description: 'açıklama',
      detectAutomaically: 'Otomatik olarak algıla',
      dropFileToUpload: 'Yüklenecek dosyayı buraya bırakın',
      editAttachment_title: 'Eki Düzenle',
      editAvatar_title: 'Avatarı Düzenle',
      editBoard_title: 'Panoyu Düzenle',
      editDueDate_title: 'Son Tarihi Düzenle',
      editEmail_title: 'E-posta Adresini Düzenle',
      editLabel_title: 'Etiketi Düzenle',
      editPassword_title: 'Şifreyi Değiştir',
      editStopwatch_title: 'Kronometreyi Düzenle',
      editUsername_title: 'Kullanıcı Adını Düzenle',
      email: 'e-posta',
      emailAlreadyInUse: 'E-posta adresi zaten kullanımda',
      enterCardTitle: 'Kart başlığını girin',
      enterDescription: 'Açıklamayı girin',
      enterFilename: 'Dosya adını girin',
      enterListTitle: 'Liste başlığını girin',
      enterProjectTitle: 'Proje başlığını girin',
      enterTaskDescription: 'Görev açıklamasını girin',
      filterByLabels_title: 'Etikete Göre Filtrele',
      filterByMembers_title: 'Üyelere göre filtrele',
      fromComputer_title: 'Bilgisayardan',
      general: 'Genel',
      hours: 'saat',
      invalidCurrentPassword: 'Mevcut şifre yanlış',
      labels: 'etiketler',
      language: 'dil',
      leaveBoard_title: 'Panodan Ayrıl',
      leaveProject_title: 'Projeden Ayrıl',
      list: 'Listeler',
      listActions_title: 'Görevleri Listele',
      managers: 'Yöneticiler',
      members: 'Üyeler',
      minutes: 'dakika',
      moveCard_title: 'Kartı Taşı',
      name: 'isim',
      newEmail: 'Yeni e-posta adresi',
      newPassword: 'Yeni şifre',
      newUsername: 'Yeni kullanıcı adı',
      noConnectionToServer: 'Sunucuya bağlantı yok',
      noBoards: 'Pano yok',
      noLists: 'Liste yok',
      noProjects: 'Proje yok',
      notifications: 'Bildirimler',
      noUnreadNotifications: 'Okunmamış bildirim yok',
      openBoard_title: 'Açık Pano',
      optional_inline: 'İsteğe bağlı',
      organization: 'Organizasyon',
      phone: 'telefon',
      preferences: 'Tercihler',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'İpucu: Panodan bir ek eklemek için CTRL-V ye (Macte Cmd-V) basın',
      project: 'Proje',
      projectNotFound_title: 'Proje bulunamadı',
      removeManager_title: 'Yöneticiyi Kaldır',
      removeMember_title: 'Üyeyi Kaldır',
      seconds: 'saniye',
      selectBoard: 'Pano Seç',
      selectList: 'Liste seç',
      selectProject: 'Proje seç',
      settings: 'Ayarlar',
      stopwatch: 'kronometre',
      subscribeToMyOwnCardsByDefault: 'Varsayılan olarak kendi kartlarıma abone ol',
      taskActions_title: 'Görev Eylemleri',
      tasks: 'Görevler',
      thereIsNoPreviewAvailableForThisAttachment: 'Bu ek için önizleme mevcut değil',
      time: 'zaman',
      title: 'başlık',
      userActions_title: 'Kullanıcı İşlemleri',
      userAddedThisCardToList: '<0>{{user}}</0><1> bu kartı {{list}</1> listesine ekledi',
      userLeftNewCommentToCard:
        '{{user}} yeni bir yorum yazdı: <2>{{card}</2> kartına «{{comment}}»',
      userMovedCardFromListToList:
        '{{user}}, <2>{{card}></2> kartını {{fromList}} listesinden {{toList}} listesine taşıdı',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> bu kartı {{fromList}} konumundan {{toList}}</1> konumuna taşıdı',
      username: 'kullanıcı adı',
      usernameAlreadyInUse: 'Kullanıcı adı zaten kullanımda',
      users: 'kullanıcı',
      writeComment: 'Yorum yazın',
    },
    action: {
      addAnotherCard: 'Başka bir kart ekle',
      addAnotherList: 'Başka bir liste ekle',
      addAnotherTask: 'Başka bir görev ekle',
      addCard: 'Kart ekle',
      addCard_title: 'Kart Ekle',
      addComment: 'Yorum ekle',
      addList: 'Liste ekle',
      addMoreDetailedDescription: 'Ayrıntılı bir açıklama ekleyin',
      addTask: 'Görev ekle',
      addToCard: 'Karta ekle',
      addUser: 'Kullanıcı ekle',
      createBoard: 'Pano oluştur',
      createFile: 'Dosya oluştur',
      createLabel: 'Etiket Oluştur',
      createNewLabel: 'Yeni etiket oluştur',
      createProject: 'Proje oluştur',
      delete: 'Sil',
      deleteAttachment: 'Eki sil',
      deleteAvatar: 'Avatarı sil',
      deleteBoard: 'Panoyu Sil',
      deleteCard: 'Kartı sil',
      deleteCard_title: 'Kartı Sil',
      deleteComment: 'Yorumu sil',
      deleteImage: 'Resmi sil',
      deleteLabel: 'Etiketi sil',
      deleteList: 'Listeyi sil',
      deleteList_title: 'Listeyi Sil',
      deleteProject: 'Projeyi sil',
      deleteProject_title: 'Projeyi Sil',
      deleteTask: 'Görevi sil',
      deleteTask_title: 'Görevi Sil',
      deleteUser: 'Kullanıcıyı sil',
      edit: 'Düzenle',
      editDueDate_title: 'Son Tarihi Düzenle',
      editDescription_title: 'Açıklamayı Düzenle',
      editEmail_title: 'E-posta Adresini Düzenle',
      editPassword_title: 'Şifreyi Değiştir',
      editStopwatch_title: 'Kronometreyi Düzenle',
      editTitle_title: 'Başlığı düzenle',
      editUsername_title: 'Kullanıcı Adını Düzenle',
      hideDetails: 'Ayrıntıları gizle',
      leaveBoard: 'Panodan Ayrıl',
      leaveProject: 'Projeden ayrıl',
      logOut_title: 'Çıkış',
      makeCover_title: 'Önizleme olarak ayarla',
      move: 'Taşı',
      moveCard_title: 'Kartı Taşı',
      remove: 'Sil',
      removeBackground: 'Arka planı kaldır',
      removeCover_title: 'Önizlemeyi Kaldır',
      removeFromBoard: 'Panodan kaldır',
      removeFromProject: 'Projeden kaldır',
      removeManager: 'Yöneticiyi kaldır',
      removeMember: 'Üyeyi kaldır',
      save: 'Kaydet',
      showAllAttachments: 'Tüm ekleri göster ({{hidden}} gizli)',
      showDetails: 'Ayrıntıları göster',
      showFewerAttachments: 'Daha az ek göster',
      start: 'başlat',
      stop: 'dur',
      subscribe: 'Abone ol',
      unsubscribe: 'Abonelikten çık',
      uploadNewAvatar: 'Yeni avatar yükle',
      uploadNewImage: 'Yeni resim yükle',
    },
  },
};