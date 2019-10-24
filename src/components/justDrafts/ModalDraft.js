/* 
<Modal
          show={this.state.AddUsermodalStatus}
          onHide={this.HideAddUserModal} // when the closeButton 'X'  is clicked
          centered
          style={this.myStyle.AddUserModalStyle}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <span style={this.myStyle.spanStyle2} className="badge badge m-2">
                <MyGoogleFont text="Add User" />
              </span>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <FormGroup>
              <FloatingLabelInput
                id="nameId"
                label={<MyGoogleFont text="Name" />}
                onBlur=""
                value={this.state.AddName}
                onChange={this.handleChangeName}
                style={{ fontSize: 15, fontFamilly: "sans-serif" }}
              />
            </FormGroup>
            <FormGroup>
              <FloatingLabelInput
                id="AddUserEmailId"
                label={<MyGoogleFont text="Email" />}
                type="email"
                onBlur=""
                value={this.state.AddUseremail}
                onChange={this.handleChangeEmail}
                style={{ fontSize: 15, fontFamilly: "sans-serif" }}
              />
            </FormGroup>
            <FormGroup>
              <FloatingLabelInput
                id="AddUsernameId"
                label={<MyGoogleFont text="Username" />}
                onBlur=""
                value={this.state.AddUsername}
                onChange={this.handleChangeUsername}
                style={{ fontSize: 15, fontFamilly: "sans-serif" }}
              />
            </FormGroup>
            <FormGroup>
              <FloatingLabelInput
                id="AddUserpasswordId"
                label={<MyGoogleFont text="Password" />}
                onBlur=""
                type="password"
                value={this.state.AddUserpassword}
                onChange={this.handleChangePassword}
                style={{ fontSize: 15 }}
              />
            </FormGroup>
          </form>
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={this.HideAddUserModal}>
          <MyGoogleFont text="Close" />
        </Button>
        <MDBBtn
          style={this.myStyle.buttonStyle}
          disabled={!this.validateForm()}
          type="submit"
        >
          <MyGoogleFont text="Save User Details" />
        </MDBBtn>
      </Modal.Footer>
    </Modal>
*/
